'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import image from '@/components/images/smartcents.png';
import { BackgroundBeams } from '@/components/ui/background-beams';

const resources = [
	{
		title: 'Resource 1',
		description: 'Description 1',
		link: '#',
		image: image.src
	},
	{
		title: 'Resource 2',
		description: 'Description 2',
		link: '#',
		image: image.src
	}
];

export default function Resources() {
	const [searchTerm, setSearchTerm] = useState('');
	const [isSearching, setIsSearching] = useState(false);

	const filteredResources = resources.filter((resource) =>
		resource.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	let typingTimeout: NodeJS.Timeout;

	const handleTyping = () => {
		clearTimeout(typingTimeout);
		setIsSearching(true);
		typingTimeout = setTimeout(() => {
			setIsSearching(false);
		}, 300);
	};

	useEffect(() => {
		handleTyping();
	}, [searchTerm]);

	return (
		<>
			<BackgroundBeams />
			<div className='rounded-lg p-4 max-w-[105rem] mx-auto'>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search resources...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className='w-full p-2 mb-4 text-lg border border-gray-600 rounded pl-10'
					/>
					<svg
						className='absolute left-3 top-[0.8rem] w-5 h-5 text-gray-600'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z'
						/>
					</svg>
				</div>
				<div
					className={`grid grid-cols-1 sm:grid-cols-4 gap-4 p-4 transition-all duration-300 ${
						isSearching ? 'blur-sm' : ''
					}`}
				>
					{filteredResources.map((resource, index) => (
						<a
							key={index}
							className='resource-card border border-gray-600 rounded-lg p-4 text-center transition-transform duration-300 transform hover:scale-105 flex items-center bg-gray-100 dark:bg-neutral-950'
							href={resource.link}
						>
							<Image
								src={resource.image}
								alt={resource.title}
								width={256}
								height={256}
								className='w-16 h-16 mr-4 rounded'
							/>
							<div>
								<h2 className='text-xl font-semibold'>{resource.title}</h2>
								<p className='text-gray-700'>{resource.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
}

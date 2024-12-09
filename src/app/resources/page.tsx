'use client';
import { useState } from 'react';

const resources = [
	{ title: 'Resource 1', description: 'Description 1', link: '#' },
	{ title: 'Resource 2', description: 'Description 2', link: '#' }
];

export default function Resources() {
	const [searchTerm, setSearchTerm] = useState('');

	const filteredResources = resources.filter((resource) =>
		resource.title.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
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
			<div className='grid grid-cols-1 sm:grid-cols-4 gap-4 p-4'>
				{filteredResources.map((resource, index) => (
					<a
						key={index}
						className='border border-gray-600 rounded-lg p-4 text-center'
						href={resource.link}
					>
						<h2 className='text-xl font-semibold'>{resource.title}</h2>
						<p className='text-gray-600'>{resource.description}</p>
					</a>
				))}
			</div>
		</div>
	);
}

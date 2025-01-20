'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import axios from 'axios';
import { useDeviceType } from '@/hooks/useDeviceType';

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:8080'
});

type Resource = {
	title: string;
	imageSource: string;
	link: string;
	description: string;
};

export default function Resources() {
	const deviceType = useDeviceType();

	const [resources, setResources] = useState<Resource[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [isSearching, setIsSearching] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [isPageChanging, setIsPageChanging] = useState(false);
	const resourcesPerPage = deviceType === 'ipad' ? 4 : 6;

	useEffect(() => {
		instance.get('/api/resources/total').then((res) => {
			setTotalPages(Math.ceil(res.data.total / resourcesPerPage) || 1);
		});
	}, []);

	useEffect(() => {
		setLoading(true);
		setCurrentPage(1);
		handleTyping();
		instance
			.get(`/api/resources`, {
				params: {
					title: searchTerm,
					page: currentPage,
					limit: resourcesPerPage
				}
			})
			.then((res) => {
				setResources(
					res.data.filter((resource: Resource) =>
						resource.title.toLowerCase().includes(searchTerm.toLowerCase())
					)
				);
				instance
					.get(`/api/resources/total/title?title=${searchTerm}`)
					.then((res) => {
						setTotalPages(Math.ceil(res.data.total / resourcesPerPage) || 1);
						setLoading(false);
					});
			});
	}, [searchTerm]);

	useEffect(() => {
		setLoading(true);
		setIsPageChanging(true);
		instance
			.get(`/api/resources`, {
				params: {
					title: searchTerm,
					page: currentPage,
					limit: resourcesPerPage
				}
			})
			.then((res) => {
				if (deviceType === 'mobile')
					setResources((prevResources) => [
						...prevResources,
						...res.data.filter((resource: Resource) =>
							resource.title.toLowerCase().includes(searchTerm.toLowerCase())
						)
					]);
				else
					setResources(
						res.data.filter((resource: Resource) =>
							resource.title.toLowerCase().includes(searchTerm.toLowerCase())
						)
					);
				setLoading(false);
				setTimeout(() => setIsPageChanging(false), 250);
			});
	}, [currentPage]);

	useEffect(() => {
		if (deviceType === 'mobile') {
			const handleScroll = () => {
				if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
					if (currentPage < totalPages) {
						setCurrentPage((prevPage) => prevPage + 1);
					}
				}
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, [currentPage, totalPages]);

	let typingTimeout: NodeJS.Timeout;

	const handleTyping = () => {
		clearTimeout(typingTimeout);
		setIsSearching(true);
		typingTimeout = setTimeout(() => {
			setIsSearching(false);
		}, 250);
	};

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

			{resources.length === 0 && !loading ? (
				<div className='flex justify-center items-center h-96 text-xl font-bold'>
					No resources found.
				</div>
			) : (
				<div
					className={`transition-all duration-250 ${
						isSearching || isPageChanging ? 'blur-sm' : ''
					} `}
				>
					<BentoGrid className='max-w-10xl mx-auto md:auto-rows-[20rem]'>
						{resources.map((resource, i) => (
							<BentoGridItem
								key={i}
								title={resource.title}
								description={resource.description}
								image={resource.imageSource}
								link={resource.link}
								header={<div />}
								className={cn('[&>p:text-lg]')}
							/>
						))}
					</BentoGrid>
				</div>
			)}

			{deviceType !== 'mobile' ? (
				<div className='flex justify-center mt-4'>
					<button
						onClick={() => setCurrentPage(currentPage - 1)}
						disabled={currentPage === 1}
						className='px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-800 rounded disabled:opacity-50'
					>
						Previous
					</button>
					<span className='px-4 py-2 mx-2'>
						Page {currentPage} of {totalPages}
					</span>
					<button
						onClick={() => setCurrentPage(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='px-4 py-2 mx-2 bg-gray-300 dark:bg-gray-800 rounded disabled:opacity-50'
					>
						Next
					</button>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}

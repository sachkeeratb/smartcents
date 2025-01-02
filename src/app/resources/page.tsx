'use client';
import { cn } from '@/lib/utils';
import React, { useState, useEffect } from 'react';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { isIPad } from '@/hooks/isMobile';

import resource1 from '@/components/images/resource1.png';
import resource2 from '@/components/images/resource2.png';
import resource3 from '@/components/images/resource3.png';
import resource4 from '@/components/images/resource4.png';
import resource5 from '@/components/images/resource5.png';
import resource6 from '@/components/images/resource6.png';
import resource7 from '@/components/images/resource7.png';
import resource8 from '@/components/images/resource8.png';
import resource9 from '@/components/images/resource9.png';

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
		}, 250);
	};

	useEffect(() => {
		handleTyping();
	}, [searchTerm]);

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
			<div
				className={`transition-all duration-250 ${
					isSearching ? 'blur-sm' : ''
				} `}
			>
				<BentoGrid className='max-w-10xl mx-auto md:auto-rows-[20rem]'>
					{filteredResources.map((resource, i) => (
						<BentoGridItem
							key={i}
							title={resource.title}
							description={resource.description}
							image={resource.image}
							link={resource.link}
							header={<div />}
							className={cn(
								'[&>p:text-lg]',
								`md:col-span-${isIPad() ? '2 ml-[8rem] mr-[-8rem]' : '1'}`
							)}
						/>
					))}
				</BentoGrid>
			</div>
		</div>
	);
}

const resources = [
	{
		title: 'Workshop 1',
		image: resource1.src,
		link: 'https://www.canva.com/design/DAGV9IO88Nw/SiUYYAoli0sK_Oe6E4Wwpg/view?utlId=h5bb84aa428#1',
		description: (
			<span className='text-sm'>
				Our first workshop, covering SMART Goals, Budgeting, and more.
			</span>
		)
	},
	{
		title: 'Workshop 2',
		image: resource2.src,
		link: 'https://www.canva.com/design/DAGZyPb-oiE/o2FypPhQ8C3gbVLu2PrbKg/view?utlId=h255c7fb878#1',
		description: (
			<span className='text-sm'>
				Our second workshop, covering Saving, Investing, and Credit/Debit.
			</span>
		)
	},
	{
		title: 'MNP - Debt - Financial Literacy in Canada',
		image: resource3.src,
		link: 'https://mnpdebt.ca/en/resources/mnp-debt-blog/financial-literacy-in-canada-lack-of-skills-and-education-contributing-to-surging-consumer-debt',
		description: (
			<span className='text-sm'>
				A lack Of skills and education contributing to surging consumer debt.
			</span>
		)
	},
	{
		title: 'CIBC - Poll - Most Canadians wish to be more financially literate',
		image: resource4.src,
		link: 'https://www.newswire.ca/news-releases/most-canadians-wish-they-were-more-financially-literate-cibc-poll-841005652.html',
		description: (
			<span className='text-sm'>
				According to a 2023 poll, a majority of Canadians wish they were more
				financially literate, showing a need for more advanced/specialized help.
			</span>
		)
	},
	{
		title: 'CISION - Survey - Canadian Youth',
		image: resource5.src,
		link: 'https://www.newswire.ca/news-releases/canadian-youth-need-to-better-understand-how-money-works-and-how-to-use-it-wisely-893368603.html',
		description: (
			<span className='text-sm'>
				Young Canadians (aged 18-34) are among the least likely (40 per cent) to
				agree they had the required knowledge upon graduation.
			</span>
		)
	},
	{
		title: 'Gov. of Canada - Pedagogical Solution to Financial Illiteracy',
		image: resource6.src,
		link: 'https://www.canada.ca/en/financial-consumer-agency/programs/research/2022-building-better-financial-futures-challenge/pedagogical-solution-financial-literacy-canada.html',
		description: (
			<span className='text-sm'>
				Improving Financial Literacy: Access to Higher Education.
			</span>
		)
	},
	{
		title:
			"Queen's Gazette - Ontario's 2025 high school financial literacy requirement",
		image: resource7.src,
		link: 'https://www.queensu.ca/gazette/stories/back-school-wish-list-ontario-s-2025-high-school-financial-literacy-requirement',
		description: (
			<span className='text-sm'>
				Six ways to meaningfully and effectively integrate financial literacy
				into high school learning without high-stakes testing.
			</span>
		)
	},
	{
		title: 'Ontario Newsroom - A Stronger OSSD',
		image: resource8.src,
		link: 'https://news.ontario.ca/en/backgrounder/1004649/modern-relevant-and-skills-focused-a-stronger-ontario-high-school-diploma',
		description: (
			<span className='text-sm'>
				A new financial literacy graduation requirement, elevating math
				education for students and staff, etc.
			</span>
		)
	},
	{
		title: 'Statista - Consumer Price Index in Canada from 2000 to 2023',
		image: resource9.src,
		link: 'https://news.ontario.ca/en/backgrounder/1004649/modern-relevant-and-skills-focused-a-stronger-ontario-high-school-diploma',
		description: (
			<span className='text-sm'>
				Adapted from Statistics Canada, statcan.gc.ca, 2000 to 2022.
			</span>
		)
	}
];

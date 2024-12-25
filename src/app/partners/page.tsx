'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { isMobile } from '@/hooks/isMobile';

import ramchandani from '@/components/images/ramchandani.png';
import ramchandani_business_card from '@/components/images/ramchandani_business_card.png';

export default function Partners() {
	const cards = data.map((card, index) => (
		<div key={card.src} className={`${isMobile() ? 'my-5' : ''}`}>
			<Card card={card} index={index} />
		</div>
	));

	return (
		<div className={`${isMobile() ? 'overflow-y-scroll h-full' : ''}`}>
			<BackgroundBeamsWithCollision>
				<div className='h-full'>
					<h2 className='max-w-7xl mx-auto text-xl md:text-5xl mt-24 font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
						Our partners!
					</h2>
					{isMobile() ? (
						<div className='mt-10 flex-col'>{cards}</div>
					) : (
						<Carousel items={cards} />
					)}
				</div>
			</BackgroundBeamsWithCollision>{' '}
		</div>
	);
}

const AshaRamchandani = () => {
	return (
		<>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Your Trusted Personal Financial Planner
					</span>
					<br />
					With over 28 years of experience, she is dedicated to helping you find
					the best mortgage options tailored to your unique needs.
				</p>
				<Image
					src={ramchandani_business_card.src}
					alt='Business Card'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-7 mb-[-1rem] object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-[-1rem]'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Expert Guidance Throughout the Process
					</span>
					<br />
					From applying for pre-approval to finding the perfect financing
					solution, she is there to guide you every step of the way.
				</p>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto mt-[-1rem]'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Finding the Best Deals for You
					</span>
					<br />
					She leverages her expertise to search the mortgage market, ensuring
					you get the best options available for your situation.
				</p>
			</div>
		</>
	);
};

const B = () => {
	return (
		<>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						An Expert Financial Analyst
					</span>
					<br />B has over 15 years of experience in financial analysis. He has
					provided invaluable insights that have helped various organizations
					make strategic financial decisions.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Image of Financial Analyst'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Driving Financial Growth
					</span>
					<br />
					Through his expertise, companies have seen significant improvements in
					profitability and efficiency. His analytical skills and strategic
					planning are highly regarded in the industry.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Financial growth chart'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Committed to Excellence
					</span>
					<br />
					B&apos;s dedication to his field has made him a sought-after
					consultant for businesses looking to optimize their financial
					strategies and operations.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Professional consultant'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
		</>
	);
};

const data = [
	{
		category: 'Mobile Mortgage Advisor',
		title: 'Asha Ramachandani',
		src: ramchandani.src,
		content: <AshaRamchandani />
	},
	{
		category: 'Financial Analyst',
		title: 'B',
		src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <B />
	},
	{
		category: 'TBD',
		title: 'Coming soon...',
		src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <div />
	}
];

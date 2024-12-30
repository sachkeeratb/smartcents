'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';
import { isMobile, isIPad } from '@/hooks/isMobile';

import ramchandani from '@/components/images/ramchandani.png';
import ramchandani_business_card from '@/components/images/ramchandani_business_card.png';

export default function Partners() {
	const cards = data.map((card, index) => (
		<div key={card.src} className={`${isMobile() || isIPad() ? 'my-5' : ''}`}>
			<Card card={card} index={index} />
		</div>
	));

	return (
		<>
			{isMobile() || isIPad() ? (
				<div className='h-full overflow-y-scroll max-w-fit mx-auto'>
					<h2 className='max-w-7xl mr-auto ml-10 text-xl md:text-5xl mt-24 font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
						Our partners!
					</h2>
					<div className='mt-10 flex-col overflow-scroll'>{cards}</div>
				</div>
			) : (
				<BackgroundBeamsWithCollision>
					<div className='h-full'>
						<h2 className='max-w-7xl mr-auto ml-10 text-xl md:text-5xl mt-24 font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
							Our partners!
						</h2>
						{isMobile() || isIPad() ? (
							<div className='mt-10 flex-col overflow-scroll'>{cards}</div>
						) : (
							<Carousel items={cards} />
						)}
					</div>
				</BackgroundBeamsWithCollision>
			)}
		</>
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

const data = [
	{
		category: 'Mobile Mortgage Advisor',
		title: 'Asha Ramachandani',
		src: ramchandani.src,
		content: <AshaRamchandani />
	},
	{
		category: 'TBD',
		title: 'Coming soon...',
		src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <div />
	}
];

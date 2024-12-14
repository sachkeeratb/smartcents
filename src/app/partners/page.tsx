'use client';
import Image from 'next/image';
import React from 'react';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

export default function Partners() {
	const cards = data.map((card, index) => (
		<Card key={card.src} card={card} index={index} />
	));

	return (
		<BackgroundBeamsWithCollision>
			<div className='h-full'>
				<h2 className='max-w-7xl mx-auto text-xl md:text-5xl mt-24 font-bold text-neutral-800 dark:text-neutral-200 font-sans'>
					Our partners!
				</h2>
				<Carousel items={cards} />
			</div>
		</BackgroundBeamsWithCollision>
	);
}

const A = () => {
	return (
		<>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						A Dedicated HR Coordinator
					</span>
					<br />A has over 10 years of experience in human resources. She has
					significantly improved our organization&apos;s talent acquisition and
					retention strategies.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Image of HR Coordinator'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Enhancing Workplace Culture
					</span>
					<br />
					Through her initiatives, employee satisfaction has increased
					dramatically. A&apos;s commitment to fostering an inclusive and
					positive work environment has been invaluable.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Team collaboration'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Driving Organizational Success
					</span>
					<br />
					A&apos;s expertise has helped our organization achieve new heights.
					Her strategic planning and leadership in HR have been key to our
					success.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Success graph'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
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

const C = () => {
	return (
		<>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						An Inspiring Educator
					</span>
					<br />C has over 20 years of experience in education. He has been
					instrumental in developing innovative teaching methods that have
					enhanced student learning and engagement.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Image of Educator'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Promoting Lifelong Learning
					</span>
					<br />
					Through his dedication, C has inspired countless students to pursue
					lifelong learning. His commitment to education has made a significant
					impact on our community.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Lifelong learning'
					height='500'
					width='500'
					className='md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain'
				/>
			</div>
			<div className='bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4'>
				<p className='text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto'>
					<span className='font-bold text-neutral-700 dark:text-neutral-200'>
						Fostering Educational Excellence
					</span>
					<br />
					C&apos;s innovative approaches and dedication to excellence have
					helped our organization achieve new milestones in education. His
					leadership and vision continue to drive our success.
				</p>
				<Image
					src='https://assets.aceternity.com/macbook.png'
					alt='Educational excellence'
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
		category: 'HR Coordinator',
		title: 'A',
		src: 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <A />
	},
	{
		category: 'Financial Analyst',
		title: 'B',
		src: 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <B />
	},
	{
		category: 'Educator',
		title: 'C',
		src: 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		content: <C />
	}
];

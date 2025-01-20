'use client';

import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { Cover } from '@/components/ui/cover';
import { useDeviceType } from '@/hooks/useDeviceType';

export default function Home() {
	const deviceType = useDeviceType();
	return (
		<>
			<BackgroundBeams />
			{deviceType === 'mobile' ? (
				<div className='flex flex-col items-center text-center mt-20 mb-[-5rem]'>
					<h1 className='text-3xl font-semibold text-black dark:text-white'>
						<div className='flex ml-auto mr-auto justify-left items-center flex-row row-span-2'>
							<span className='mr-2 text-left flex-shrink-0'>Financial</span>
							<Cover className='inline-block text-left'>
								<FlipWords words={['Literacy', 'Prosperity', 'Knowledge']} />
							</Cover>
						</div>
						<span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
							SmartCents
						</span>
					</h1>
				</div>
			) : (
				<div className='flex flex-col items-center text-center mt-20'>
					<h1 className='text-4xl font-semibold text-black dark:text-white'>
						<div className='flex ml-24 justify-left items-center flex-row row-span-2'>
							<span className='mr-2 text-left flex-shrink-0'>Financial</span>
							<Cover className='inline-block text-left'>
								<FlipWords words={['Literacy', 'Prosperity', 'Knowledge']} />
							</Cover>
						</div>
						<span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
							SmartCents
						</span>
					</h1>
				</div>
			)}
			<div className='flex flex-col items-center text-center mt-20'>
				<TextGenerateEffect
					className='text-4xl font-semibold text-black dark:text-white'
					words={'Our Motive'}
				/>
				<div className='text-xl text-gray-700 dark:text-gray-300 w-2/3 '>
					<TextGenerateEffect
						words={
							'It is pivotal for Canadian citizens to consider their future financial plans in our ever-changing world.'
						}
					/>
					<TextGenerateEffect
						words={
							'While adults may gain experience managing money and planning with tools like budgets, through experience, those just graduating high school are left in the dark.'
						}
						className='mt-4'
					/>
					<TextGenerateEffect
						words={
							'However, students, especially those planning to attend university, need to learn how to manage their money, save for the future, and invest their wealth, especially now.'
						}
						className='mt-4'
					/>
				</div>
			</div>
			<InfiniteMovingCards
				items={testimonials}
				direction='right'
				speed='slow'
				className='ml-auto mr-auto mt-5'
			/>
		</>
	);
}

const testimonials = [
	{
		quote:
			'SmartCents has completely transformed the way I manage my finances. The tools and resources provided are invaluable.',
		name: 'John Doe',
		title: 'Satisfied Client'
	},
	{
		quote:
			'Thanks to SmartCents, I now have a clear understanding of how to save and invest my money for the future.',
		name: 'Jane Smith',
		title: 'Happy User'
	},
	{
		quote:
			'The financial literacy programs offered by SmartCents are top-notch. I feel more confident about my financial decisions.',
		name: 'Emily Johnson',
		title: 'Grateful Client'
	},
	{
		quote:
			'SmartCents has been a game-changer for me. The insights and advice have helped me achieve my financial goals.',
		name: 'Michael Brown',
		title: 'Thrilled User'
	},
	{
		quote:
			'I highly recommend SmartCents to anyone looking to improve their financial knowledge and skills.',
		name: 'Sarah Davis',
		title: 'Pleased Client'
	}
];

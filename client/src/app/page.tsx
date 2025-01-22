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
			{deviceType === 'desktop' ? <BackgroundBeams /> : null}
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
				<div className='flex flex-col items-center text-center mt-14'>
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
			'The FLC was both challenging and incredibly rewarding, greatly enhancing my financial knowledge, sharpening my critical thinking, and improving my decision-making abilities.',
		name: 'FLC Winner',
		title: 'Waterloo FLC'
	},
	{
		quote:
			'I really liked this experience because it taught me many things about different cards. This taught me about different ways to invest.',
		name: 'PDSB Student',
		title: 'DISCOVER Workshop'
	},
	{
		quote:
			'This workshop was actually fun to listen to. I learned things that I can use in my daily life. It was also really engaging because the presenters were actually talking to us and it felt like I could relate to this. I also loved the engaging aspect of the presentation of when they asked us questions and played blooket!',
		name: 'Anonymous HB Student',
		title: 'DISCOVER Workshop'
	},
	{
		quote:
			'The workshop was interesting and it really helped solidify my base on personal finances: the interactive components were very engaging too!',
		name: 'Anonymous Student',
		title: 'DISCOVER Workshop'
	},
	{
		quote:
			"I will say that the presentation was very informative and very helpful for students who are trying to save money and make smarter financial choices. This presentation is important for us because us as students mostly rely on our parents for money so we don't really know when to stop, but hearing this presentation it helps us prepare for the future.",
		name: 'An HB Student',
		title: 'DISCOVER Workshop'
	}
];

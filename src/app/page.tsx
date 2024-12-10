import ImageSlider from '@/components/ImageSlider';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { FlipWords } from '@/components/ui/flip-words';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

export default function Home() {
	return (
		<>
			<BackgroundBeams />
			<div className='flex flex-col items-center text-center mt-20'>
				<h1 className='text-4xl font-semibold text-black dark:text-white'>
					<div className='text-centre mr-11'>
						Financial
						<FlipWords
							words={['Literacy', 'Prosperity', 'Knowledge']}
							className='inline-block w-[100px]'
						/>
					</div>
					<span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
						SmartCents
					</span>
				</h1>
			</div>
			<div className='flex flex-col items-center text-center mt-20'>
				<TextGenerateEffect
					className='text-4xl font-semibold text-black dark:text-white'
					words={'Our Motive'}
				/>
				<p className='text-xl text-gray-700 dark:text-gray-300 w-2/3 '>
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
				</p>
			</div>
			<div className='mt-[-15rem]'>
				<ContainerScroll titleComponent={<></>}>
					<br />
					<ImageSlider />
				</ContainerScroll>
			</div>
		</>
	);
}

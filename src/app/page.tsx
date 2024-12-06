import ImageSlider from '@/components/ImageSlider';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function Home() {
	return (
		<>
			<BackgroundBeams />
			<ContainerScroll
				titleComponent={
					<>
						<h1 className='text-4xl font-semibold text-black dark:text-white'>
							Finacial Literacy <br />
							<span className='text-4xl md:text-[6rem] font-bold mt-1 leading-none'>
								SmartCents
							</span>
						</h1>
					</>
				}
			>
				<br />
				<ImageSlider />
			</ContainerScroll>
		</>
	);
}

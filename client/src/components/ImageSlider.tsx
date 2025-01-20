'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import image1 from '@/components/images/smartcents2025.png';
import image2 from '@/components/images/wflc.png';
import image3 from '@/components/images/teaching.png';
import image4 from '@/components/images/lockedin.jpg';
import image5 from '@/components/images/discussion.png';

// Interface for image data
interface ImageData {
	src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
	{
		src: image1
	},
	{
		src: image2
	},
	{
		src: image3
	},
	{
		src: image4
	},
	{
		src: image5
	}
];

export default function ImageSlider(): JSX.Element {
	// State to keep track of the current image index
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// State to determine if the image is being hovered over
	const [isHovered, setIsHovered] = useState<boolean>(false);

	// Function to show the previous slide
	const prevSlide = (): void => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + images.length) % images.length
		);
	};

	// Function to show the next slide
	const nextSlide = (): void => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	// useEffect hook to handle automatic slide transition
	useEffect(() => {
		// Start interval for automatic slide change if not hovered
		if (!isHovered) {
			const interval = setInterval(() => {
				nextSlide();
			}, 3000);

			// Cleanup the interval on component unmount
			return () => {
				clearInterval(interval);
			};
		}
	}, [isHovered]);

	// Handle mouse over event
	const handleMouseOver = (): void => {
		setIsHovered(true);
	};

	// Handle mouse leave event
	const handleMouseLeave = (): void => {
		setIsHovered(false);
	};

	return (
		<div className='relative w-full mx-auto'>
			<div
				className='relative h-[500px] mx-12 group overflow-hidden'
				onMouseOver={handleMouseOver}
				onMouseLeave={handleMouseLeave}
			>
				{images.map((image, index) => (
					<Image
						key={index}
						src={image.src}
						alt={`Slider Image ${index + 1}`}
						className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
							index === currentIndex ? 'opacity-100' : 'opacity-0'
						} rounded-xl object-cover w-full h-full`}
					/>
				))}
			</div>
			<button
				className='absolute left-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#6C6C6C] mx-1 -mt-[10px] -translate-y-1/2 bg-[#222222] text-white p-2 group max-h-10'
				onClick={prevSlide}
			>
				<ChevronLeft className='text-gray-400 group-hover:text-white' />
			</button>
			<button
				className='absolute right-0 top-1/2 transform h-[459px] rounded-xl hover:bg-[#6C6C6C] mx-1 -mt-[10px] -translate-y-1/2 bg-[#222222] text-white p-2 group max-h-10'
				onClick={nextSlide}
			>
				<ChevronRight className='text-gray-400 group-hover:text-white' />
			</button>
			<div className='flex justify-center mt-4'>
				{images.map((_, index) => (
					<div
						key={index}
						className={`h-1 w-10 mx-1 ${
							index === currentIndex
								? 'bg-[#08894b] rounded-xl'
								: 'bg-gray-300 rounded-xl'
						} transition-all duration-500 ease-in-out`}
					></div>
				))}
			</div>
		</div>
	);
}

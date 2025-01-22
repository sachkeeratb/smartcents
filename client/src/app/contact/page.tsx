'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import ImageSlider from '@/components/ImageSlider';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { useDeviceType } from '@/hooks/useDeviceType';

export default function Contact() {
	const deviceType = useDeviceType();
	return (
		<>
			{deviceType === 'desktop' ? (
				<BackgroundBeams className='absolute inset-0 z-0' />
			) : null}
			<div
				className={`${
					deviceType !== 'mobile' ? 'fixed pt-10' : 'relative'
				} px-2 md:px-10 py-4 w-[calc(100%-4rem)] mx-auto rounded-md h-screen`}
			>
				<div className='relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left mt-20 w-full h-full'>
					<div className='flex-1 mb-8 md:mb-0 md:mr-8'>
						<h1 className='text-4xl font-semibold text-black dark:text-white mb-8 transition duration-300 hover:text-gray-500 dark:hover:text-gray-300'>
							Contact Us
						</h1>
						<div className='mb-8'>
							<h2 className='text-2xl font-semibold transition duration-300 hover:text-gray-500 dark:hover:text-gray-300'>
								Feedback
							</h2>
							<div className='text-lg'>
								We value your feedback! Please fill out our{' '}
								<Button
									onClick={() =>
										window.open(
											'https://docs.google.com/forms/d/e/1FAIpQLSe1db1-G2s11C8IIkwR5yCtmNV6sXKLEK0QWEDs_XVv0j3vVw/viewform',
											'_blank'
										)
									}
									className='bg-slate-500 dark:bg-slate-700 text-white px-0.5 py-0.5 max-h-7 ml-1 transition duration-300 hover:bg-slate-700 dark:hover:bg-slate-500'
								>
									Google Form
								</Button>
								.
							</div>
						</div>
						<div className='mb-8'>
							<h2 className='text-2xl font-semibold transition duration-300 hover:text-gray-500 dark:hover:text-gray-300'>
								Our School
							</h2>
							<p className='text-lg text-black dark:text-white'>
								Harold M. Brathwaite Secondary School
							</p>
							<p className='text-lg text-black dark:text-white'>
								415 Great Lakes Dr, Brampton, ON L6R 2Z4, Canada
							</p>
							<p className='text-lg text-black dark:text-white'>
								Phone: (905) 793-2155
							</p>
						</div>
						<div className='mb-8'>
							<h2 className='text-2xl font-semibold transition duration-300 hover:text-gray-500 dark:hover:text-gray-300'>
								Follow Us
							</h2>
							<p className='text-lg text-black dark:text-white'>
								Instagram:{' '}
								<Link
									href='https://www.instagram.com/smartcents_ca'
									target='_blank'
									className='text-blue-500 dark:text-blue-300 underline transition duration-300 hover:text-blue-700 dark:hover:text-blue-500'
								>
									@smartcents_ca
								</Link>
							</p>
							<p className='text-lg text-black dark:text-white'>
								Email:{' '}
								<Link
									href='mailto:smartcents.ca@gmail.com'
									className='text-blue-500 dark:text-blue-300 underline transition duration-300 hover:text-blue-700 dark:hover:text-blue-500'
								>
									smartcents.ca@gmail.com
								</Link>
							</p>
						</div>
					</div>
					{deviceType !== 'desktop' ? (
						<></>
					) : (
						<div className='flex-1 mt-[-20rem] md:ml-[-30rem] '>
							<ContainerScroll
								titleComponent={
									<h1 className='text-4xl font-semibold text-black dark:text-white'>
										Check out our Insta! <br />
										<span className='text-3xl md:text-[6rem] font-bold mt-1 leading-none'>
											What We Do
										</span>
									</h1>
								}
							>
								<br />
								<ImageSlider />
							</ContainerScroll>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

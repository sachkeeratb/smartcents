'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Vortex } from '@/components/ui/vortex';

export default function Contact() {
	return (
		<Vortex
			backgroundColor='black'
			rangeY={800}
			particleCount={100}
			baseHue={120}
			className='flex items-center flex-col justify-center px-2 md:px-10  py-4 w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden'
		>
			<div className='flex flex-col items-center text-center mt-20'>
				<h1 className='text-4xl font-semibold text-black dark:text-white mb-8'>
					Contact Us
				</h1>
				<div className='mb-8'>
					<h2 className='text-2xl font-semibold'>Feedback</h2>
					<p className='text-lg'>
						We value your feedback! Please fill out our{' '}
						<Button
							onClick={() =>
								window.open('https://forms.gle/your-google-form-link', '_blank')
							}
							className='bg-slate-500 px-0.5 py-0.5 max-h-7 ml-1'
						>
							Google Form
						</Button>
						.
					</p>
				</div>
				<div className='mb-8'>
					<h2 className='text-2xl font-semibold'>Our School</h2>
					<p className='text-lg'>Harold M. Brathwaite Secondary School</p>
					<p className='text-lg'>
						415 Great Lakes Dr, Brampton, ON L6R 2Z4, Canada
					</p>
					<p className='text-lg'>Phone: (905) 793-2155</p>
				</div>
				<div className='mb-8'>
					<h2 className='text-2xl font-semibold'>Follow Us</h2>
					<p className='text-lg'>
						Instagram:{' '}
						<Link
							href='https://www.instagram.com/smartcents_ca'
							target='_blank'
							className='text-blue-500 underline'
						>
							@smartcents_ca
						</Link>
					</p>
					<p className='text-lg'>
						Email:{' '}
						<Link
							href='mailto:smartcents.ca@gmail.com'
							className='text-blue-500 underline'
						>
							smartcents.ca@gmail.com
						</Link>
					</p>
				</div>
			</div>
		</Vortex>
	);
}

'use client';
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { BackgroundBeams } from '@/components/ui/background-beams';

import image from '@/components/images/smartcents.png';
import vansh from '@/components/images/vansh.png';
import sachkeerat from '@/components/images/sachkeerat.png';

export default function About() {
	return (
		<>
			<BackgroundBeams />
			<div className='grid grid-cols-1 md:grid-cols-3 w-5/6 ml-auto mr-auto mt-[-3rem]'>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							Manav Vasa
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Founder
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={image}
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et...
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							Vansh Chauhan
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Founder
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={vansh}
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et...
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							Kushi Kallam
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Founder
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={image}
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et...
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 w-2/3 ml-auto mr-auto mt-[-8rem]'>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							Sachkeerat Brar
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Head of IT
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={sachkeerat}
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et...
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border'>
						<CardItem
							translateZ='50'
							className='text-xl font-bold text-neutral-600 dark:text-white'
						>
							Mehar Kapoor
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'
						>
							Head of Outreach and Marketing
						</CardItem>
						<CardItem translateZ='100' className='w-full mt-4'>
							<Image
								src={image}
								height='1000'
								width='1000'
								className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et...
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
		</>
	);
}

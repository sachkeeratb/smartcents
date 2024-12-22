'use client';
import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { BackgroundBeams } from '@/components/ui/background-beams';

import image from '@/components/images/smartcents.png';
import manav from '@/components/images/manav.png';
import vansh from '@/components/images/vansh.png';
import kushi from '@/components/images/kushi.png';
import sachkeerat from '@/components/images/sachkeerat.png';

export default function About() {
	return (
		<>
			<BackgroundBeams />
			<div className='grid grid-cols-1 md:grid-cols-3 w-5/6 ml-auto mr-auto mt-[-3rem]'>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border'>
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
								src={manav}
								height='800'
								width='800'
								className='h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Hi, my name is Manav. I&apos;m a high school student who is
							equipped with and has seen the importance of essential financial
							skills. <br /> As an aspiring leader in HB FBLC and HB&apos;s
							computer science clubs, I aim to leverage my mathematical and
							financial expertise to create workshops and literature that are
							both informative and fun for the community.
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border'>
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
								height='800'
								width='800'
								className='h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Hi, my name is Vansh. I&apos;m a high school student passionate
							about equipping others with essential financial skills. As an avid
							leader in HB&apos;s business scene and an experienced public
							speaker, I strive to make financial literacy accessible and
							engaging through SmartCents.
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border'>
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
								src={kushi}
								height='800'
								width='800'
								className='h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Hi, my name is Kushi Kallam and I&apos;m a Grade 11 student
							currently attending Harold M. Brathwaite. I am interested in
							finance and being able to teach others about it. Through
							SmartCents, I hope to accomplish my goal and prepare youth for the
							financial world.
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 w-2/3 ml-auto mr-auto mt-[-8rem]'>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border'>
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
								height='800'
								width='800'
								className='h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Hi, my name is Sachkeerat. I am passionate about technology and
							lead the IT efforts at SmartCents to ensure our platform runs
							smoothly and efficiently.
						</CardItem>
					</CardBody>
				</CardContainer>
				<CardContainer className='inter-var'>
					<CardBody className='bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-4 border'>
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
								height='800'
								width='800'
								className='h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl'
								alt='thumbnail'
							/>
						</CardItem>
						<CardItem
							as='p'
							translateZ='60'
							className='text-neutral-500 text-sm max-w-[18rem] mt-2 justify-self-center text-center dark:text-neutral-300'
						>
							Hi, my name is Mehar. I am dedicated to spreading financial
							literacy and ensuring our outreach and marketing efforts are
							impactful and far-reaching. Through SmartCents, I aim to connect
							with the community and promote financial education.
						</CardItem>
					</CardBody>
				</CardContainer>
			</div>
		</>
	);
}

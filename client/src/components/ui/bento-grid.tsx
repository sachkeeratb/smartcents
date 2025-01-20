'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const BentoGrid = ({
	className,
	children
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	const [deviceType, setDeviceType] = useState<'mobile' | 'ipad' | 'desktop'>(
		'desktop'
	);

	useEffect(() => {
		const userAgent =
			typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
		const isIPad = /iPad/i.test(userAgent) && 'ontouchend' in document;
		const isMobile = /iPhone|iPod|Android/i.test(userAgent) && !isIPad;

		if (isMobile) {
			setDeviceType('mobile');
		} else if (isIPad) {
			setDeviceType('ipad');
		} else {
			setDeviceType('desktop');
		}
	}, []);
	return (
		<div
			className={cn(
				`grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-${
					deviceType === 'mobile' ? 1 : deviceType === 'ipad' ? 2 : 3
				} gap-4 max-w-7xl mx-auto`,
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	title,
	description,
	header,
	image,
	link
}: {
	className?: string;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	header?: React.ReactNode;
	image: string | StaticImport;
	link: string;
}) => {
	return (
		<div
			className={cn(
				'row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-black/[0.2] justify-between flex flex-col space-y-4',
				className
			)}
		>
			{header}
			<div className=''>
				<Image
					src={image}
					alt='Topic Image'
					width={1080}
					height={1920}
					className='w-full h-40 object-cover rounded-xl cursor-pointer'
					onClick={() => window.open(link, '_blank')}
				/>
			</div>
			<div className='group-hover/bento:translate-x-2 transition duration-200'>
				<div className='font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2'>
					{title}
				</div>
				<div className='font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300'>
					<span className='text-sm'>{description}</span>
				</div>
			</div>
		</div>
	);
};

'use client';

import { Menu, Package2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';

import TransitionLink from '@/components/TransitionLink';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { ModeToggle } from '@/components/darkmode-toggle';

import logo from '@/components/images/smartcents.png';

export function NavBar() {
	const pathname = usePathname();

	return (
		<>
			<header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-10'>
				<Link href='/' className='flex items-center'>
					<Image
						src={logo}
						width={500}
						height={500}
						alt='SmartCents'
						className='h-8 w-auto transition-transform duration-300 hover:scale-110'
					/>
				</Link>
				<nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
					<TransitionLink
						href='/'
						className={`${
							pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Home
					</TransitionLink>
					<TransitionLink
						href='/about'
						className={`${
							pathname === '/about'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						About Us
					</TransitionLink>
					<TransitionLink
						href='/resources'
						className={`${
							pathname === '/resources'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Resources
					</TransitionLink>
					<TransitionLink
						href='/partners'
						className={`${
							pathname === '/partners'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Partners
					</TransitionLink>
					<TransitionLink
						href='/contact'
						className={`${
							pathname === '/contact'
								? 'text-foreground'
								: 'text-muted-foreground'
						}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
					>
						Contact Us
					</TransitionLink>
				</nav>
				<div className='ml-auto'>
					<ModeToggle />
				</div>
				<Sheet>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='shrink-0 md:hidden'
						>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle navigation menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='left'>
						<nav className='grid gap-6 text-lg font-medium'>
							<Link
								href='#'
								className='flex items-center gap-2 text-lg font-semibold'
							>
								<Package2 className='h-6 w-6' />
								<span className='sr-only'>$ami</span>
							</Link>
							<TransitionLink
								href='/'
								className={`${
									pathname === '/' ? 'text-foreground' : 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Home
							</TransitionLink>
							<TransitionLink
								href='/about'
								className={`${
									pathname === '/about'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								About Us
							</TransitionLink>
							<TransitionLink
								href='/resources'
								className={`${
									pathname === '/resources'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Resources
							</TransitionLink>
							<TransitionLink
								href='/partners'
								className={`${
									pathname === '/partners'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Partners
							</TransitionLink>
							<TransitionLink
								href='/contact'
								className={`${
									pathname === '/contact'
										? 'text-foreground'
										: 'text-muted-foreground'
								}  transition-transform duration-300 hover:text-foreground hover:scale-110`}
							>
								Contact Us
							</TransitionLink>
						</nav>
					</SheetContent>
				</Sheet>
			</header>
		</>
	);
}

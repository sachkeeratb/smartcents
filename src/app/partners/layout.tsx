import React from 'react';
import { BackgroundBeamsWithCollision } from '@/components/ui/background-beams-with-collision';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<BackgroundBeamsWithCollision className='min-h-screen min-w-screen'>
			{children}
		</BackgroundBeamsWithCollision>
	);
};

export default Layout;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.unsplash.com'
			},
			{
				hostname: 'assets.aceternity.com'
			}
		]
	}
};

export default nextConfig;

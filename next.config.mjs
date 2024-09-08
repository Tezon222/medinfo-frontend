/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	devIndicators: {
		appIsrStatus: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;

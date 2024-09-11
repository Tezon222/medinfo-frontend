/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	devIndicators: {
		appIsrStatus: false,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "health.gov",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;

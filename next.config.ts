import type { NextConfig } from "next";

const nextConfig = {
	reactStrictMode: true,
	devIndicators: {
		position: "bottom-right",
	},

	eslint: {
		ignoreDuringBuilds: true,
	},

	typescript: {
		ignoreBuildErrors: true,
	},

	// eslint-disable-next-line ts-eslint/require-await
	rewrites: async () => {
		return [
			{
				source: "/backend-api/:path*",
				destination: "https://medinfo-backend-xie7.onrender.com/:path*",
			},
		];
	},

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "health.gov",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "odphp.health.gov",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatar.iran.liara.run",
				port: "",
				pathname: "/**",
			},
		],
	},
} satisfies NextConfig;

export default nextConfig;

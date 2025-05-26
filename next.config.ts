// next.config.ts
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const directusURL = process.env.NEXT_PUBLIC_DIRECTUS_URL?.replace(/\/$/, '');

if (!directusURL) {
	throw new Error('NEXT_PUBLIC_DIRECTUS_URL is not defined in your .env file');
}

const directusHostname = new URL(directusURL).hostname;

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{ protocol: 'http', hostname: directusHostname },
			{ protocol: 'https', hostname: directusHostname },
		],
	},
	async rewrites() {
		return [
			{
				source: '/directus/:path*',
				destination: `${directusURL}/:path*`,
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

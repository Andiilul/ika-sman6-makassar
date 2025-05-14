const directusURL = process.env.NEXT_PUBLIC_DIRECTUS_URL?.replace(/\/$/, "");

if (!directusURL) {
  throw new Error("NEXT_PUBLIC_DIRECTUS_URL is not defined in your .env file");
}

const directusHostname = new URL(directusURL).hostname;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: directusHostname,
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/directus/:path*",
        destination: `${directusURL}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;

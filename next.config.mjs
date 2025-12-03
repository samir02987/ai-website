/** @type {import('next').NextConfig} */

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "randomuser.me"
            },
        ],
        domains: ['randomuser.me'],
    },
};

export default nextConfig;

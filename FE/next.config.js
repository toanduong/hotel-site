/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com', // Đôi khi Unsplash dùng domain này cho tài khoản Plus
                pathname: '**',
            },        ],
    },
    output: 'export'    
}

module.exports = nextConfig

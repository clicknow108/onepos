/** @type {import('next').NextConfig} */
const htmlCacheControl = {
  key: 'Cache-Control',
  value: 'public, max-age=0, s-maxage=60, stale-while-revalidate=300',
};

const nextConfig = {
  // eslint.ignoreDuringBuilds: không bật — `next lint` hiện sạch (2026-09).
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'blog.onepos.vn' },
      { protocol: 'https', hostname: 'admin.onepos.vn' },
      { protocol: 'https', hostname: 'api.onepos.vn' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  async headers() {
    // Chỉ HTML document — không áp lên /_next/static (hashed assets).
    return [
      { source: '/', headers: [htmlCacheControl] },
      {
        source: '/((?!_next/static|_next/image).*)',
        headers: [htmlCacheControl],
      },
    ];
  },
};

module.exports = nextConfig;

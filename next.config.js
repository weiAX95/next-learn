/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // 如果需要使用外部图片，在这里添加域名
    formats: ['image/avif', 'image/webp'],
  },
  // fontLoaders 不再需要放在 experimental 中
  // 而是直接使用新的字体配置方式
  optimizeFonts: true,
  // 如果您确实需要配置 experimental 的其他功能
  experimental: {
    // 其他实验性功能配置
  }
};

module.exports = nextConfig;
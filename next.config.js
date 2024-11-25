/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // fontLoaders 不再需要放在 experimental 中
  // 而是直接使用新的字体配置方式
  // 如果您确实需要配置 experimental 的其他功能
  experimental: {
    // 其他实验性功能配置
    ppr: true
  }
};

module.exports = nextConfig;
import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig :NextConfig= {
  images: {
    domains: [], // 如果需要从外部域名加载图片
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
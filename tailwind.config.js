/** @type {import('tailwindcss').Config} */
// import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './src/app/**/*.{js,ts,jsx,tsx,mdx}', // 注意这些路径
    '../src/components/**/*.{js,ts,jsx,tsx,mdx}',
    '../src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // 使用 class 策略而不是 media 查询
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  mode: 'site',
  title: 'Biz-Library',
  favicon: '/images/favicon.ico',
  logo: '/images/photos.jpg',
  description: '用于Biz Web Dev 前端组件开发。',
  // resolve: { includes: ['document']},
  base: '/',
  publicPath: '/biz-web-library/', // 生成路径
  exportStatic: {
    htmlSuffix: true,
  }, // 对每隔路由输出html
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ], // 第一项配置会作为站点默认的 locale
  theme: {
    '@c-primary': '#16c35f',
  },
});

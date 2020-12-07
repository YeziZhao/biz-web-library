import { defineConfig } from 'dumi';

export default defineConfig({

  // 网站描述配置
  mode: 'site',
  title: 'Biz-Library',
  favicon: '/images/favicon.ico',
  logo: '/images/photos.jpg',
  description: '用于Biz Web Dev 前端组件开发。',

  // 打包路径配置
  base: '/biz-web-library',
  publicPath: '/biz-web-library/', // 生成路径
  outputPath: 'docs-dist',
  exportStatic: {}, // 对每隔路由输出html
  dynamicImport: {}, // 动态导入

  // 多国语顺序
  locales: [
    ['en-US', 'English'],
    ['zh-CN', '中文'],
  ],

  // 主题
  theme: {
    '@c-primary': '#16c35f',
  },
  
  // alias: {
  //   'biz-web-library': '@',
  // }
});

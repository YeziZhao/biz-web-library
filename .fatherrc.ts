// 作为 father-build 的配置文件，这里将会配置，组件库被如何编译和编译产物的类型。一般我们都是针对组件库使用场景，进行简单的声明即可。也就是说，一般设置 esm: 'rollup', 就够用了
// esm -> 浏览器环境
// cjs -> nodejs 环境（测试|ssr）
// umd -> 通过浏览器 script 引入的方式
export default {
  target: 'browser',
  esm: {
    // rollup
    type: 'babel',
    file: 'dist',
    minify: false, // 压缩文件
    importLibToEs: true,
  },
  // cssModules: true,
  extractCSS: false,
  lessInBabelMode: true,
  entry: ['src/Button/index.tsx', 'src/Dialog/index.tsx'],
  autoprefixer: {
    browsers: ['ie>9', 'Safari >= 6'],
  },
  pkgs: [
    // 组件依赖构建顺序
  ],
};

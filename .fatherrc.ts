// 作为 father-build 的配置文件，这里将会配置，组件库被如何编译和编译产物的类型。一般我们都是针对组件库使用场景，进行简单的声明即可。也就是说，一般设置 esm: 'rollup', 就够用了
export default {
  esm: 'rollup',
  // cjs: 'rollup',
};

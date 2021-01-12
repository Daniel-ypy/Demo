module.exports = {
  publicPath: "./",
  css: {
    loaderOptions: {
      // 向 CSS 相关的 loader 传递选项
      less: {
        //modifyVars: { "@primary-color": "#1DA57A" },
        javascriptEnabled: true,
      },
    },
  },
  transpileDependencies: ["vuex-module-decorators"],
};

module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  // 需要添加的内容
  plugins: [
    [
      "import",
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "lib",
        style: true,
      },
    ],
  ],
};

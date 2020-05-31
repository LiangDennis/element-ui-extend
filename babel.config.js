module.exports = {
  // presets: ["@vue/cli-plugin-babel/preset"]
  // presets: ["@vue/cli-plugin-babel/preset", ["es2015", { modules: false }]],
  presets: [
    "@vue/cli-plugin-babel/preset",
    ["@babel/preset-env", { modules: false }]
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};

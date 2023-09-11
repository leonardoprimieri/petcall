module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@screens": "./src/screens",
            "@routes": "./src/routes",
            "@storage": "./src/storage",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@layouts": "./src/layouts",
            "@hooks": "./src/hooks",
            "@services": "./src/services",
            "@config": "./src/config",
            "@mappers": "./src/mappers",
            "@enums": "./src/enums",
            "@domain": "./src/domain",
            "@helpers": "./src/helpers",
          },
        },
      ],
    ],
  };
};

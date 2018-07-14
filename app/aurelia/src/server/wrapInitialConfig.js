export default config => ({
  ...config,
  module: {
    ...config.module,
    rules: [...config.module.rules],
  },
});

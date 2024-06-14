import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  dev: {
    port: 8000,
  },
  output: {
    disableCssModuleExtension: true,
    disableNodePolyfill: false,
  },
  performance: {
    transformLodash: false,
  },
  runtime: {
    router: true,
  },
  plugins: [appTools()],
  tools: {
    webpack(config) {
      config.infrastructureLogging = {
        ...config.infrastructureLogging,
        debug: /webpack\.cache/,
      };
    },
  },
});

/* eslint-disable no-param-reassign */
/** @type {import('next').NextConfig} */
module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };

    return config;
  },
  reactStrictMode: true,
  distDir: 'build',
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true,
    jsxImportSource: true,
  },
};

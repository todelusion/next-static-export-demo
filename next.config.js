/** @type {import('next').NextConfig} */

module.exports = {
  output: "export",
  reactStrictMode: true,
  assetPrefix: process.env.ENV_VAR === "production" ? "./" : "",
  images: {
    unoptimized: true,
  },
};

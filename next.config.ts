import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  webpack(config) {
    // Primero buscá la regla que maneja imágenes de Next
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.(".svg")
    );

    // Excluí los .svg del file-loader de Next
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    // Ahora agregá la regla de svgr
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};


export default nextConfig;

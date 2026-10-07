import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/weddings-mvp",
  assetPrefix: "/weddings-mvp/",
  images: { unoptimized: true },
};

export default nextConfig;

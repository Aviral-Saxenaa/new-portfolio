import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `npm run build` writes /out, deployable to any static host.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactCompiler: true,
  // allow cloud preview domains and local hosts
  allowedDevOrigins: ["*.run.app", "localhost", "127.0.0.1", "0.0.0.0"],
};

export default nextConfig;

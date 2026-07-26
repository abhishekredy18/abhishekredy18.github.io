import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages (user-site repo, served at domain root —
  // deliberately no basePath/assetPrefix).
  output: "export",
  // next/image optimization needs a server; static export requires this.
  images: { unoptimized: true },
  // Keep false so the export emits about.html, project-iddaw.html, etc. at
  // the root — legacy .html URLs from the v2 static site keep resolving.
  trailingSlash: false,
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Place build output outside the OneDrive-backed workspace to avoid
  // Turbopack/OneDrive file-lock issues.
  distDir: "../../../.next_local",
};

export default nextConfig;

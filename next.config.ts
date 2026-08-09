import type { NextConfig } from "next";
import path from 'path';

const nextConfig: NextConfig = {
  // Prevent Turbopack from scanning parent directories (avoids picking up
  // unrelated project files that reference `document`).
  // @ts-ignore - `turbopack` is accepted by Next but may not be in the type defs.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;

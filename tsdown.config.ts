import type { UserConfig } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfig = defineConfig({
  entry: {
    index: "./src/index.ts",
    bin: "./src/bin.ts",
    "*": "./src/platforms/*.ts",
  },
  exports: {
    enabled: true,
    customExports: (pkg, context) => {
      context.pkg.bin = pkg["./bin"];
      delete pkg["./bin"];
      return pkg;
    },
  },
  platform: "node",
  tsconfig: true,
  skipNodeModulesBundle: true,
});

export default config;

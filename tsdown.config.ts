import { readdir } from "node:fs/promises";
import { parse } from "node:path";
import type { UserConfig, UserConfigFn } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfigFn = defineConfig(async () => {
  const entry: Record<string, string> = {
    index: "./src/index.ts",
    bin: "./src/bin.ts",
  };

  const platforms = await readdir("./src/platforms");
  for (const platform of platforms) {
    const { name } = parse(platform);
    entry[name] = `./src/platforms/${platform}`;
  }

  return {
    entry,
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
  } satisfies UserConfig;
});

export default config;

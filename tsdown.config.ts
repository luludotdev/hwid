import { readdir } from "node:fs/promises";
import { parse } from "node:path";
import type { UserConfig, UserConfigFn } from "tsdown";
import { defineConfig } from "tsdown";

const config: UserConfigFn = defineConfig(async () => {
  const entry: Record<string, string> = { index: "./src/index.ts" };

  const platforms = await readdir("./src/platforms");
  for (const platform of platforms) {
    const { name } = parse(platform);
    entry[name] = `./src/platforms/${platform}`;
  }

  return {
    entry,
    exports: true,
    platform: "node",
    tsconfig: true,
    skipNodeModulesBundle: true,
  } satisfies UserConfig;
});

export default config;

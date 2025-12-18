import common from "@luludev/eslint-config/common";
import node from "@luludev/eslint-config/node";
import prettier from "@luludev/eslint-config/prettier";
import typescript from "@luludev/eslint-config/typescript";

const config = [
  ...common,
  ...node,
  ...typescript,
  ...prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "n/shebang": 0,
    },
  },
];

export default config;

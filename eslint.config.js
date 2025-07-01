import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      // Build outputs
      'dist/**/*',
      'dist-ssr/**/*',
      'coverage/**/*',
      '*.local',

      // Dependencies
      'node_modules/**/*',

      // Logs
      'logs/**/*',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',
      'lerna-debug.log*',

      // Environment variables
      '.env',
      '.env.local',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',

      // IDE
      '.vscode/**/*',
      '.idea/**/*',
      '*.swp',
      '*.swo',

      // Build info
      '*.tsbuildinfo',

      // OS
      '.DS_Store',
      'Thumbs.db',

      // Minified files
      '*.min.js',
    ],
  },
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'], plugins: { js }, extends: ['js/recommended'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
])

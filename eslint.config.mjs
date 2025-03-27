import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  // 基础配置
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [
      // 系统文件
      '.eslintrc.js',
      'node_modules/**/*',
      'dist/**/*',
      '.idea/**/*',
      'README.md',
      '.gitignore',
      
      // 配置文件
      '.prettierrc.js',
      'eslint.config.mjs',
      'babel.config.js',
      '*.config.js',
      'build/**/*.js',
      
      // copy 文件
      '**/.*copy*.*',
      '**/*copy*.*'
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021
      },
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'react': pluginReact,
      'react-hooks': pluginReactHooks,
      'import': pluginImport,
      'jsx-a11y': pluginJsxA11y
    },
    extends: ['plugin:prettier/recommended'],
    settings: {
      react: {
        version: 'detect'
      },
      'import/resolver': {
        typescript: {},
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        }
      }
    }
  },
  // Airbnb 依赖的版本低，先不配置Airbnb规则
  // // Airbnb 规则
  // { 
    
  //   files: ["**/*.{js,jsx,ts,tsx}"],
  //   extends: [
  //     'airbnb',
  //     'airbnb-typescript',
  //     'airbnb/hooks'
  //   ],
  //   plugins: {
  //     '@typescript-eslint': tseslint.plugin,
  //     'react': pluginReact,
  //     'react-hooks': pluginReactHooks,
  //     'import': pluginImport,
  //     'jsx-a11y': pluginJsxA11y
  //   },
  // },
  
  // 自定义规则
  { 
    rules: {
        // TypeScript 相关规则
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        
        // React 相关规则
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx'] }],
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // 导入相关规则
        'import/prefer-default-export': 'off',
        'import/extensions': [
          'error',
          'ignorePackages',
          {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
          }
        ],

        // 其他规则
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    }
  }
]);
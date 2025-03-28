import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import configPrettier from 'eslint-config-prettier';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: globals.browser } },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    // 基础配置
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
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
            '.stylelintrc.js',
            'eslint.config.mjs',
            'babel.config.js',
            '*.config.js',
            'build/**/*.js',

            // copy 文件
            '**/.*copy*.*',
            '**/*copy*.*',
        ],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
            },
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            import: pluginImport,
            'jsx-a11y': pluginJsxA11y,
            prettier: pluginPrettier,
        },
        extends: [configPrettier],
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {},
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx'],
                },
            },
        },
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
            'prettier/prettier': 'error', // 添加 Prettier 规则

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
                    tsx: 'never',
                },
            ],

            // 导入顺序
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js 内置模块
                        'external', // 第三方库
                        'internal', // 内部模块
                        'parent', // 父级目录
                        'sibling', // 同级目录
                        'index', // 当前目录
                        'object', // 对象导入
                        'type', // 类型导入
                    ],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'external',
                            position: 'before',
                        },
                        {
                            pattern: '@/**',
                            group: 'internal',
                            position: 'before',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'], // 排除某些类型以避免冲突
                    'newlines-between': 'always', // 在不同组之间添加空行
                    alphabetize: {
                        order: 'asc', // 按字母顺序排序
                        caseInsensitive: true, // 忽略大小写
                    },
                },
            ],

            // 其他规则
            'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
            'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        },
    },
]);

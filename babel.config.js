/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-26 15:02:49
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:53:14
 * @FilePath: /pnpm-react-ts-webpack5/babel.config.js
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */

// eslint-disable-next-line no-undef
const isDEV = typeof process !== 'undefined' && process.env.NODE_ENV === 'development'; // 是否是开发模式

console.log('isDEV', isDEV);

// babel.config.js
// eslint-disable-next-line no-undef
module.exports = {
    // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
    presets: [
        [
            '@babel/preset-env',
            {
                // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
                // "targets": {
                //  "chrome": 35,
                //  "ie": 9
                // },
                useBuiltIns: 'usage', // 根据代码中实际使用到的特性自动导入所需的 polyfill
                corejs: {
                    version: 3,
                    proposals: true,
                }, // 配置使用core-js使用的版本
                modules: false, // 指定将ES6模块转换为哪种模块类型,默认是auto,自动选择
            },
        ],
        // "@babel/preset-react",
        [
            '@babel/preset-react',
            {
                runtime: 'automatic', // 启用新的 JSX 转换，自动导入 React
                development: process.env.NODE_ENV === 'development',
                importSource: 'react', // 默认值，可以改为其他 JSX runtime
            },
        ],
        '@babel/preset-typescript',
    ],
    sourceType: 'unambiguous', // 解决webpack5中import()报错问题
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }], // 解决装饰器报错问题
        // eslint-disable-next-line no-undef
        isDEV && require.resolve('react-refresh/babel'), // 如果是开发模式,就启动react热更新插件
    ].filter(Boolean), // 过滤空值
};

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:08:58
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 11:04:27
 * @FilePath: /pnpm-react-ts-webpack5/build/webpack.prod.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
// webpack.prod.js

const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // 压缩css
      new TerserPlugin({ // 压缩js
        parallel: true, // 开启多线程压缩
        extractComments: false, // 是否提取注释到单独文件
        terserOptions: {
          compress: {
            // 删除 console
            pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
            // 删除 debugger 语句
            drop_debugger: true,
            // 删除无法访问的代码
            dead_code: true,
            // 移除未使用的变量
            unused: true,
            // 移除无法访问的分支
            conditionals: true,
            // 为警告选项
            warnings: false  // 这才是控制警告的正确选项
          },
          format: {
            comments: false // 移除注释
          }
        }
      }),
    ],
  },
  plugins: [
    // 复制文件插件
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'), // 复制public下文件
          to: path.resolve(__dirname, '../dist'), // 复制到dist目录中
          filter: source => {
            return !source.includes('index.html') // 忽略index.html
          }
        },
      ],
    }),
    // 抽离css插件
    new MiniCssExtractPlugin({
      // filename: 'static/css/[name].css' // 抽离css的输出目录和名称
      filename: 'static/css/[name].[contenthash:8].css' // 加上[contenthash:8]
    }),
  ]
})

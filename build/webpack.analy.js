/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-26 20:21:15
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 09:03:33
 * @FilePath: /pnpm-react-ts-webpack5/build/webpack.analy.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
// webpack.analy.js
const prodConfig = require('./webpack.prod.js')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();
const { merge } = require('webpack-merge')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer') // 引入分析打包结果插件

module.exports = smp.wrap(merge(prodConfig, {
  plugins: [
    new BundleAnalyzerPlugin() // 配置分析打包结果插件
  ]
}))


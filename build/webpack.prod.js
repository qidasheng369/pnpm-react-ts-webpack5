/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:08:58
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 14:22:29
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
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const globAll = require('glob-all');

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
    splitChunks: {
      // 默认配置
      chunks: 'all', // 分割所有类型的代码，包括同步和异步
      minSize: 20000, // 生成 chunk 的最小大小（单位 bytes）
      // maxSize: 244000, // 生成 chunk 的最大大小（单位 bytes）// 添加最大尺寸限制
      // 常见设置值
      maxSize: {
        javascript: 244000,    // ≈ 238KB，适合普通JS文件
        style: 50000,         // ≈ 49KB，适合CSS文件
        image: 100000,        // ≈ 98KB，适合图片文件
      },
      minRemainingSize: 0, // 确保拆分后剩余的最小 chunk 体积超过限制来避免大量的小 chunk
      minChunks: 1, // 拆分前必须共享模块的最小块数
      maxAsyncRequests: 30, // 按需加载时的最大并行请求数
      maxInitialRequests: 30, // 入口点的最大并行请求数
      enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值
      
      cacheGroups: {
        // React 运行时核心
        'react-runtime': {
          name: 'chunk-react-runtime',
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          priority: 40, // 取值范围：-20 到 40，值越大，优先级越高
          chunks: 'all', // 同步和异步都进行分包
          minSize: 0, // 忽略最小体积限制
          minChunks: 1, // 被使用一次就分包
          reuseExistingChunk: true, // 复用已存在的 chunk
          maxSize: 488000, // 添加最大尺寸限制
        },
        // React 其他依赖
        'react-deps': {
          name: 'chunk-react-deps',
          test: /[\\/]node_modules[\\/](@emotion|@mui|react-router|redux)[\\/]/,
          priority: 30,
          chunks: 'all',
          minSize: 30000, // 体积大于30kb才会被分包
          reuseExistingChunk: true // 复用已存在的 chunk
        },

        // React 相关库单独分包
        // react: {
        //   name: 'chunk-react',
        //   priority: 20, // 优先级更高。范围是-20到20。默认为0。
        //   test: /[\\/]node_modules[\\/]react(.*)/,
        //   chunks: 'all',  // 默认只对异步代码进行分包，这里改为同步和异步都进行分包, 可选值有 all, async, initial
        //   minSize: 0, // 忽略最小体积限制
        //   minChunks: 1, // 被使用一次就分包
        //   reuseExistingChunk: true, // 复用已存在的 chunk
        // },

        // babel 核心依赖
        coreDeps: {
          test: /[\\/]node_modules[\\/](@babel|core-js)[\\/]/,
          name: 'chunk-core',
          priority: 20, // 优先级最高
          chunks: 'all', // 默认只对异步代码进行分包，这里改为同步和异步都进行分包
        },

        // 第三方库分包
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name(module, chunks, cacheGroupKey) {
            // 根据第三方包名动态生成包名
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1].replace('@', '');
            return `${cacheGroupKey}.${packageName}`;
          },
          priority: 10, // 优先级提高
          chunks: 'all', // 默认只对异步代码进行分包，这里改为同步和异步都进行分包
          minSize: 0, // 忽略最小体积限制
          minChunks: 1, // 被使用一次就分包
          reuseExistingChunk: true // 复用已存在的 chunk
        },
        
        // 业务基础包
        commons: {
          name: 'chunk-commons',
          minChunks: 2, // 最小共享模块数 被引用两次以上才会被分包
          priority: 0, // 优先级，数值越大优先级越高
          chunks: 'all',
          minSize: 0,
          reuseExistingChunk: true
        },

        // 异步加载的公共模块
        asyncCommons: {
          name: 'chunk-async',
          chunks: 'async',
          priority: -1,
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    },
  },
  // 添加性能配置
  performance: {
    maxEntrypointSize: 250000, // 入口文件大小限制（bytes）
    maxAssetSize: 250000, // 单个资源大小限制（bytes）
    hints: 'warning',
    // 过滤需要监控的文件类型
    assetFilter: function(assetFilename) {
      return !(/\.map$/.test(assetFilename)) && !(/\.(mp4|webm|ogg|mp3|wav)$/.test(assetFilename));
    }
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
    // 清理无用css
    new PurgeCSSPlugin({
      // 检测src下所有tsx文件和public下index.html中使用的类名和id和标签名称
      // 只打包这些文件中用到的样式
      paths: globAll.sync([
        `${path.join(__dirname, '../src')}/**/*.tsx`,
        path.join(__dirname, '../public/index.html')
      ]),
      safelist: {
        standard: [/^ant-/], // 过滤以ant-开头的类名，哪怕没用到也不删除
      },
    }),
  ]
})

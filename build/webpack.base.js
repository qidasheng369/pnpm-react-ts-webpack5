/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:08:27
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-26 19:51:43
 * @FilePath: /pnpm-react-ts-webpack5/build/webpack.base.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
// webpack.base.js
const path = require('path'); // 引入path模块
const webpack = require('webpack'); // 引入webpack
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包html文件
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);

module.exports = {  
    entry: path.join(__dirname, '../src/index.tsx'), // 入口文件
    // 打包文件出口  
    output: {  
        filename: 'static/js/[name].js', // 每个输出js的名称  
        path: path.join(__dirname, '../dist'), // 打包结果输出路径  
        clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了  
        publicPath: '/' // 打包后文件的公共前缀路径  
    },
    resolve: {
        extensions: [ '.tsx', '.js', '.ts'], // 自动解析确定的扩展
    },
    module: {
        rules: [
            // js tsx处理
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true // 在这里启用缓存
                    }
                }
            },
            // LESS Modules
            {
                test: /\.module\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // 全局 LESS
            {
                test: /\.(css|less)$/,
                exclude: /\.module\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // SCSS Modules
            {
                test: /\.module\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]--[hash:base64:5]'
                            },
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // 全局 SCSS
            {
                test: /\.(css|scss)$/,
                exclude: /\.module\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // 图片处理
            {
                test:/.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{ 
                    filename:'static/images/[name][ext]', // 文件输出目录和命名
                },
            },
            // 字体处理
            {
                test:/.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{ 
                    filename:'static/fonts/[name][ext]', // 文件输出目录和命名
                },
            },
            // 媒体文件处理
            {
                test:/.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
                type: "asset", // type选择asset
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024, // 小于10kb转base64位
                    }
                },
                generator:{ 
                    filename:'static/media/[name][ext]', // 文件输出目录和命名
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        new webpack.DefinePlugin({ // 定义环境变量
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
        }),
        new ReactRefreshWebpackPlugin(), // 添加热更新插件
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jpeg', '.jpg', '.png'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
}
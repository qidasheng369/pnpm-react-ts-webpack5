/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:08:27
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 09:11:16
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
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === 'development' // 是否是开发模式

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
    externals: { // 不打包的库
        jquery: 'jQuery',
    },
    devtool: 'eval-cheap-module-source-map',
    cache: {
        type: 'filesystem', // 使用文件缓存
    },
    resolve: {
        extensions: [ '.tsx', '.js', '.ts'], // 自动解析确定的扩展
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jpeg', '.jpg', '.png'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
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
    module: {
        noParse: /jquery|lodash/, // 不打包这些文件
        rules: [
            // js tsx处理
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: [path.resolve(__dirname, '../src')], // 只对项目src文件的ts,tsx进行loader解析
                exclude: /node_modules/,
                use: [
                    'thread-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true // 在这里启用缓存
                        }
                    }
                ]
            },
            // 单独处理css
            {
                test: /\.css$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader',
                ]
            },
            // LESS Modules
            {
                test: /\.module\.less$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
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
                test: /\.less$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /\.module\.less$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            // SCSS Modules
            {
                test: /\.module\.scss$/,
                include: [path.resolve(__dirname, '../src')],
                exclude: /node_modules/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
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
                include: [path.resolve(__dirname, '../src')],
                exclude: /\.module\.scss$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 开发环境使用style-looader,打包模式抽离css
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

}
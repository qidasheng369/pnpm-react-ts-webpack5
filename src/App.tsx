/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:06:09
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 13:50:38
 * @FilePath: /pnpm-react-ts-webpack5/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { lazy, Suspense, useState } from 'react';

import typingAudio from '@/assets/audios/typing.mp3';
import cat from '@/assets/imgs/cat1.jpeg';

import * as cssModuleStyles from './app.module.css';
import * as lessModuleStyles from './app.module.less';
import * as sassModuleStyles from './app.module.scss';
import * as sassStyles from './app2.scss';
// import duckVideo from '@/assets/videos/duck.mp4';

// 使用 lazy 加载组件
const Class = lazy(() => import('./components/Class'));

// 懒加载视频组件
const VideoPlayer = lazy(() => import('./components/VideoPlayer'));
const AutoVideoPlayer = lazy(() => import('./components/AutoVideoPlayer'));

const LazyDemo = lazy(() => import('@/components/LazyDemo')); // 使用import语法配合react的Lazy动态引入资源

// prefetch
const PreFetchDemo = lazy(
    () =>
        import(
            /* webpackChunkName: "PreFetchDemo" */
            /* webpackPrefetch: true */
            '@/components/PreFetchDemo'
        )
);

// preload
const PreloadDemo = lazy(
    () =>
        import(
            /* webpackChunkName: "PreloadDemo" */
            /* webpackPreload: true */
            /* webpackMode: "eager" */
            '@/components/PreloadDemo'
        )
);

console.log('lessModuleStyles', lessModuleStyles);
console.log('sassModuleStyles', sassModuleStyles);

const App = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [show, setShow] = useState(false);
    const [showPreload, setShowPreload] = useState(false);

    // 点击事件中动态引入css, 设置show为true
    const onClick = async () => {
        try {
            import('./app1.css');
            setShow(!show);
        } catch (err) {
            console.error('CSS加载失败:', err);
        }
    };

    const onClick2 = () => {
        setShowPreload(!showPreload);
    };

    return (
        <div>
            <h2 className={cssModuleStyles?.cssModuleClassName}>template_react_ts css module</h2>
            <h2 className={lessModuleStyles?.lessModuleClassName}>template_react_ts less module</h2>
            <h2 className={sassModuleStyles?.sassModuleClassName}>template_react_ts sass module</h2>
            <h2 className={sassStyles?.sassClassName}>template_react_ts sass</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <Class />
            </Suspense>
            <img width={200} height={200} src={cat} alt="cat" />
            {/* <video width={200} height={200} src={duckVideo}></video> */}
            {/* <video
                width="640"
                height="360"
                controls // 显示播放控件（可选）
                autoPlay // 自动播放
                muted // 静音（某些浏览器强制要求静音才能自动播放）
                loop={false} // 循环播放（可选）
            >
                <source src={duckVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}

            <button onClick={() => setShowVideo(true)}>加载视频</button>

            {showVideo && (
                <Suspense fallback={<div>视频加载中...</div>}>
                    <VideoPlayer />
                </Suspense>
            )}

            <h2 onClick={onClick}>点击懒加载</h2>
            {/* show为true时加载LazyDemo组件 */}
            {show && (
                <Suspense fallback={<span>加载中</span>}>
                    <LazyDemo />
                </Suspense>
            )}

            <h2 onClick={onClick2}>点击预加载</h2>
            {/* show为true时加载组件 */}
            {showPreload && (
                <>
                    <Suspense fallback={<span>loading...</span>}>
                        <PreloadDemo />
                    </Suspense>
                    <Suspense fallback={<span>loading...</span>}>
                        <PreFetchDemo />
                    </Suspense>
                </>
            )}

            <div style={{ width: '100%', height: '360px' }}>站位1</div>
            <div style={{ width: '100%', height: '360px' }}>站位2</div>

            <Suspense fallback={<div>视频加载中...</div>}>
                <AutoVideoPlayer />
            </Suspense>

            <audio
                controls // 显示播放控件（可选）
                autoPlay // 自动播放
                muted // 静音（某些浏览器强制要求静音才能自动播放）
                loop={false} // 循环播放（可选）
            >
                <source src={typingAudio} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default App;

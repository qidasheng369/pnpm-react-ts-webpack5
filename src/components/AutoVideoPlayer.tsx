/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-27 11:32:43
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 11:39:11
 * @FilePath: /pnpm-react-ts-webpack5/src/components/AutoVideoPlayer.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { useEffect, useRef } from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 建议使用 IntersectionObserver 在元素进入视口时加载视频
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // 当组件进入视口时加载视频
                        import('@/assets/videos/duck2.mp4').then(({ default: videoSrc }) => {
                            if (videoRef.current) {
                                videoRef.current.src = videoSrc;
                            }
                        });
                        observer.disconnect(); // 加载后取消观察
                    }
                });
            },
            { threshold: 0.1 } // 当10%的内容可见时触发
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef}>
            <video
                ref={videoRef}
                width="640"
                height="360"
                controls
                muted
                style={{ marginTop: '20px' }}
            >
                <p>您的浏览器不支持 HTML5 视频。</p>
            </video>
        </div>
    );
};

export default VideoPlayer;

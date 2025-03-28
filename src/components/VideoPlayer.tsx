/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-27 11:21:48
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:34:21
 * @FilePath: /pnpm-react-ts-webpack5/src/components/VideoPlayer.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React from 'react';

const VideoPlayer: React.FC = () => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    React.useEffect(() => {
        // 动态导入视频资源
        import('@/assets/videos/duck.mp4').then(({ default: videoSrc }) => {
            if (videoRef.current) {
                videoRef.current.src = videoSrc;
            }
        });
    }, []);

    return <video ref={videoRef} width="640" height="360" controls autoPlay muted loop={false} />;
};

export default VideoPlayer;

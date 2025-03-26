/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:06:09
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-26 20:00:32
 * @FilePath: /pnpm-react-ts-webpack5/src/App.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
import React from 'react';
import cat from '@/assets/imgs/cat1.jpeg';
import './app.module.less';
import './app.module.scss';
import Class from './components/Class';
import duckVideo from '@/assets/videos/duck.mp4';
import typingAudio from '@/assets/audios/typing.mp3';


function App() {
    
    return (  
         <div> 
            <h2>template_react_ts 1111112223333</h2>
            <Class />
            <img width={200} height={200} src={cat} alt="cat" />
            {/* <video width={200} height={200} src={duckVideo}></video> */}
            <video
                width="640"
                height="360"
                controls // 显示播放控件（可选）
                autoPlay // 自动播放
                muted // 静音（某些浏览器强制要求静音才能自动播放）
                loop={false} // 循环播放（可选）
            >
                <source src={duckVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
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
    )
}  

export default App

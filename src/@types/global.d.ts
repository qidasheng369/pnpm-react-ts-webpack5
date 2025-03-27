/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-26 09:31:28
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 16:24:24
 * @FilePath: /pnpm-react-ts-webpack5/src/@types/global.d.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */

// declare module '*.module.scss' {
//   const classes: { [key: string]: string };
//   export default classes;
// }

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export = classes;
}

declare module '*.module.less' {
    const classes: { readonly [key: string]: string };
    export = classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export = classes;
}

declare module '*.less' {
    const content: { [className: string]: string };
    export = content;
}

declare module '*.scss' {
    const content: { [className: string]: string };
    export = content;
}

// 媒体文件相关声明
declare module '*.mp4' {
    const src: string;
    export default src;
}
declare module '*.mp3' {
    const src: string;
    export default src;
}

declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.less';
declare module '*.scss';
declare module '*.css';
declare module '*.mp4';
declare module '*.mp3';

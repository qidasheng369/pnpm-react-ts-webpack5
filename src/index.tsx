/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:06:20
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-26 09:16:29
 * @FilePath: /pnpm-react-ts-webpack5/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

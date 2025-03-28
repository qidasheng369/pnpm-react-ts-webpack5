/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-25 21:06:20
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 22:11:59
 * @FilePath: /pnpm-react-ts-webpack5/src/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '@/redux';

import App from './App';

console.log('NODE_ENV', process.env.NODE_ENV);
console.log('BASE_ENV', process.env.BASE_ENV);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:17:53
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 15:39:41
 * @FilePath: /pnpm-react-ts-webpack5/src/redux/index.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import {
    TypedUseSelectorHook,
    useDispatch as useReduxDispatch,
    useSelector as useReduxSelector,
} from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'; // 状态持久化
import storage from 'redux-persist/lib/storage'; // 使用 localStorage 作为存储引擎
import reduxPromise from 'redux-promise'; // 处理 Promise action
import { thunk } from 'redux-thunk'; // 处理异步 action

import home from './modules/home';

// 合并所有 reducer
const reducer = combineReducers({
    home, // home 模块的 reducer
});

// redux-persist 配置
const persistConfig = {
    key: 'redux-state', // 存储的键名
    storage, // 存储引擎
    // whitelist: ['home'], // 白名单，只持久化指定的 reducer
    // blacklist: [], // 黑名单，不持久化指定的 reducer
};

// 创建持久化 reducer
const persistReducerConfig = persistReducer(persistConfig, reducer);

// 自定义中间件配置
const customMiddleware: Middleware[] = [
    thunk, // 支持异步 action
    reduxPromise, // 支持 Promise action
];

// 创建 store
export const store = configureStore({
    // 注入持久化后的 reducer
    reducer: persistReducerConfig,
    // 配置中间件
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            // 配置序列化检查
            serializableCheck: {
                // 忽略 redux-persist 的 action
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }).concat(customMiddleware), // 添加自定义中间件
    // 开启 Redux DevTools，生产环境建议关闭
    devTools: process.env.NODE_ENV !== 'production',
});

// 创建持久化 store
export const persistor = persistStore(store);

// 导出 TypeScript 类型
export type RootState = ReturnType<typeof store.getState>; // store 的状态类型
export type AppDispatch = typeof store.dispatch; // dispatch 的类型

// 导出类型安全的 hooks
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector; // 类型安全的 useSelector
export const useDispatch = () => useReduxDispatch<AppDispatch>(); // 类型安全的 useDispatch

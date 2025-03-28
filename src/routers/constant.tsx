/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:29:11
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:27:34
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/constant.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import { lazy } from 'react';

import lazyLoad from '@/routers/utils/lazyLoad';

export const Home = lazyLoad(lazy(() => import('@/pages/Home')));
export const Class = lazyLoad(lazy(() => import('@/components/Class')));
export const LazyDemo = lazyLoad(lazy(() => import('@/components/LazyDemo')));
export const Login = lazyLoad(lazy(() => import('@/components/H5Login')));
export const NotAuth = lazyLoad(lazy(() => import('@/components/ErrorMessage/403')));
export const NotNetwork = lazyLoad(lazy(() => import('@/components/ErrorMessage/500')));

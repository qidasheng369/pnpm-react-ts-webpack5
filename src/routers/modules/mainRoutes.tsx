/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:29:11
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:55:18
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/modules/mainRoutes.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// import React from 'react';

import { Class, LazyDemo } from '@/routers/constant';
import { RouteObject } from '@/routers/interface/index';

// 主路由->后续接口中动态获取
const mainRoutes: RouteObject[] = [
    {
        path: '/class',
        children: [
            {
                path: '',
                element: Class,
                meta: {
                    title: 'Class组件',
                },
            },
            {
                path: 'lazy',
                element: LazyDemo,
                meta: {
                    title: '懒加载组件',
                    permissions: ['add', 'edit'], // 权限
                },
            },
        ],
    },
];

export default mainRoutes;

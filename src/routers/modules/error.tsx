/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:29:11
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:32:22
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/modules/error.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// import React from 'react';

import { NotAuth, NotNetwork } from '@/routers/constant';
import { RouteObject } from '@/routers/interface/index';

const errorRouter: RouteObject[] = [
    {
        path: '/403', // 路径
        element: NotAuth,
        meta: {
            requiresAuth: false, // 是否需要鉴权
            title: '403', // 标题
        },
    },
    {
        path: '/500', // 路径
        element: NotNetwork,
        meta: {
            requiresAuth: false, // 是否需要鉴权
            title: '403', // 标题
        },
    },
];

export default errorRouter;

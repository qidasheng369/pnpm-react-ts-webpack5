/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:44:58
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:59:46
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// import React from 'react';

import { useRoutes } from 'react-router-dom';

import { RouteObject } from './interface/index';
// * 导入所有router
import allRouters from './modules/index';

// 转换路由配置为 react-router-dom 的类型
export const rootRouter: RouteObject[] = [...allRouters] as RouteObject[];

const RoutersConfig = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};

export default RoutersConfig;

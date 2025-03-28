/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:44:58
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 16:55:45
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// router/index.tsx
import React, { lazy, Suspense } from 'react';

import { Route, Routes /* Navigate */ } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Class = lazy(() => import('../components/Class'));
const LazyDemo = lazy(() => import('../components/LazyDemo'));

type RouteObject = {
    path: string;
    element?: React.ReactElement | React.FC;
    permissions?: Array<string>;
    children?: Array<RouteObject>;
};

// 全局路径
const globalRoutes: RouteObject[] = [
    {
        path: '/', // 路径
        element: <Home />,
        permissions: ['add'], // 权限
    },
];

// 主路由->后续接口中动态获取
const mainRoutes: RouteObject[] = [
    {
        path: '/home', // 路径
        element: <Home />,
        permissions: ['add'], // 权限
    },
    {
        path: '/class',
        permissions: ['add', 'edit'], // 权限
        children: [
            {
                path: '',
                element: <Class />,
            },
            {
                path: 'lazy',
                element: <LazyDemo />,
            },
        ],
    },
];

// 路由错误重定向
// const NotFound = () => {
//     return <div>你所访问的页面不存在！</div>;
// };

const routes: RouteObject[] = globalRoutes.concat(mainRoutes);

// 路由路径处理函数
const transformRoutes = (routeList: RouteObject[]) => {
    return (
        <>
            {routeList.map((route: any) => {
                return route.children && route.children.length ? (
                    <Route key={route.path} path={route.path} element={route.element}>
                        {transformRoutes(route.children)}
                    </Route>
                ) : (
                    <Route key={route.path} path={route.path} element={route.element}></Route>
                );
            })}
        </>
    );
};

console.log('transformRoutes', transformRoutes(routes));

const RoutersConfig = () => {
    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>{transformRoutes(routes)}</Routes>
        </Suspense>
    );
};

export default RoutersConfig;

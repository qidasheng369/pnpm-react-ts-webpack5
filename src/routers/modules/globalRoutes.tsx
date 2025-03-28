import React from 'react';

import { Navigate } from 'react-router-dom';

import { Home, Login } from '@/routers/constant';
import { RouteObject } from '@/routers/interface/index';
/**
 * @description 全局路径
 */
// {
//   path: "/", // 路径
//   element: <Home />, // 要渲染的组件
//   index: false, // 是否是索引路由
//   children: [], // 子路由
//   caseSensitive: false, // 是否严格匹配，区分大小写
//   meta: {
//     requiresAuth: false, // 是否需要鉴权
//     title: "首页", // 标题
//     permissions: ["add", "edit"], // 权限列表
//     key: "home", // 唯一标识
//   }
// },
const globalRoutes: RouteObject[] = [
    {
        path: '/', // 路径
        element: Home,
        meta: {
            requiresAuth: true, // 是否需要鉴权
            title: '首页', // 标题
            permissions: ['add', 'edit'], // 权限列表
        },
    },
    {
        path: '/login',
        element: Login,
        meta: {
            title: '登陆',
        },
    },
    {
        path: '*',
        element: <Navigate to="/403" />,
    },
];

export default globalRoutes;

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:29:11
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:32:53
 * @FilePath: /pnpm-react-ts-webpack5/src/routers/utils/authRouter.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { JSX } from 'react';

import { useLocation, Navigate } from 'react-router-dom';

import { HOME_URL } from '@/config/config';
import { RootState, useSelector } from '@/redux';
import { rootRouter } from '@/routers/index';
import { searchRoute } from '@/utils/utils';

/**
 * @description 路由守护组件
 */
const AuthRouter = (props: { children: JSX.Element }) => {
    const { token } = useSelector((state: RootState) => state.home);

    // * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
    const { authRouter } = useSelector((state: RootState) => state.auth);

    const { pathname } = useLocation();
    const route = searchRoute(pathname, rootRouter);

    // * 判断当前路由是否需要访问权限(不需要权限直接放行)
    if (!route.meta?.requiresAuth) return props.children;

    // * 判断是否有Token
    if (!token) return <Navigate to="/login" replace />;

    // * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
    const staticRouter = [HOME_URL, '/403'];
    const routerList = authRouter.concat(staticRouter);

    // * 如果访问的地址没有在路由表中重定向到403页面
    if (routerList.indexOf(pathname) == -1) return <Navigate to="/403" />;

    // * 当前账号有权限返回 Router，正常访问页面
    return props.children;
};

export default AuthRouter;

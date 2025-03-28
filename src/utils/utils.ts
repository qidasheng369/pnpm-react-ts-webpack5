/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:28:47
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:58:22
 * @FilePath: /pnpm-react-ts-webpack5/src/utils/utils.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import { RouteObject } from '@/routers/interface';
/**
 * @description 递归查询对应的路由
 * @param {String} path 当前访问地址
 * @param {Array} routes 路由列表
 * @returns array
 */
export const searchRoute = (path: string, routes: RouteObject[] = []): RouteObject => {
    let result: RouteObject = {};
    for (const item of routes) {
        if (item.path === path) return item;
        if (item.children) {
            const res = searchRoute(path, item.children);
            if (Object.keys(res).length) result = res;
        }
    }
    return result;
};

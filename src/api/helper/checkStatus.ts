/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:28:13
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:14:17
 * @FilePath: /pnpm-react-ts-webpack5/src/api/helper/checkStatus.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */

// import {Toast} from 'antd-mobile'
/**
 * @description 校验网络请求状态码
 * @param {string} status 状态码
 */
export const checkStatus = (status: string) => {
    switch (status) {
        case '400':
            console.log({
                content: '请求失败！请您稍后重试',
                maskClickable: false,
            });
            break;
        case '401':
            console.log({
                content: '登录失效！请您重新登录',
                maskClickable: false,
            });
            break;
        case '403':
            console.log({
                content: '当前账号无权限访问！',
                maskClickable: false,
            });
            break;
        case '404':
            console.log({
                content: '你所访问的资源不存在！',
                maskClickable: false,
            });
            break;
        case '405':
            console.log({
                content: '请求方式错误！请您稍后重试',
                maskClickable: false,
            });
            break;
        case '408':
            console.log({
                content: '请求超时！请您稍后重试',
                maskClickable: false,
            });
            break;
        case '500':
            console.log({
                content: '服务异常！',
                maskClickable: false,
            });
            break;
        case '502':
            console.log({
                content: '网关错误！',
                maskClickable: false,
            });
            break;
        case '503':
            console.log({
                content: '服务不可用！',
                maskClickable: false,
            });
            break;
        case '504':
            console.log({
                content: '网关超时！',
                maskClickable: false,
            });
            break;
        default:
            console.log({
                content: '请求失败！',
                maskClickable: false,
            });
    }
};

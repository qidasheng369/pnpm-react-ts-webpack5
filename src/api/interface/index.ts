/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 18:37:18
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:44:14
 * @FilePath: /pnpm-react-ts-webpack5/src/api/interface/index.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// * 请求响应参数(不包含data)
export interface Result {
    code: string;
    msg: string;
}

// * 请求响应参数(包含data)
export interface ResultData<T = any> extends Result {
    data?: T;
}

// * 登录
export interface LoginReqForm {
    username: string;
    password: string;
}
export interface LoginRes {
    access_token: string;
}
export interface ResAuthButtons {
    [propName: string]: any;
}

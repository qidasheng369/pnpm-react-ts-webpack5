/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 18:37:18
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:42:48
 * @FilePath: /pnpm-react-ts-webpack5/src/api/modules/login.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import { LoginReqForm, LoginRes } from '../interface/index';
// import qs from 'qs';
import http from '../request';

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: LoginReqForm) => {
    try {
        return http.get<LoginRes>(`/rec`, params);
        // return http.post<ResLogin>(`/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
        // return http.post<ResLogin>(`/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
        // return http.post<ResLogin>(`/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
    } catch (err) {
        console.log(err);
    }
};

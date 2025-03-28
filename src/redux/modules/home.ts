/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:59:36
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:05:29
 * @FilePath: /pnpm-react-ts-webpack5/src/redux/modules/home.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomeState } from '@/redux/interface';

const homeState: HomeState = {
    userInfo: null,
    token: '',
};

const homeSlice = createSlice({
    name: 'home',
    initialState: homeState,
    reducers: {
        // 设置用户信息
        setUserInfo: (state: HomeState, { payload }: PayloadAction<object>) => {
            state.userInfo = payload;
        },
        // 设置Token
        setToken: (state: HomeState, { payload }: PayloadAction<string>) => {
            state.token = payload;
        },
    },
});

export const { setUserInfo, setToken } = homeSlice.actions;

export default homeSlice.reducer;

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:19:54
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 15:32:38
 * @FilePath: /pnpm-react-ts-webpack5/src/redux/modules/home.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// modules/home.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { HomeState } from '@/redux/interface/index';

const homeState: HomeState = {
    userInfo: null,
};

const homeSlice = createSlice({
    name: 'home',
    initialState: homeState,
    reducers: {
        // 设置用户信息
        setUserInfo: (state: HomeState, { payload }: PayloadAction<object>) => {
            state.userInfo = payload;
        },
    },
});

export const { setUserInfo } = homeSlice.actions;

export default homeSlice.reducer;

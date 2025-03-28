/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 15:45:31
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 16:17:19
 * @FilePath: /pnpm-react-ts-webpack5/src/pages/Home.tsx
 * @Description:
 *
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { useCallback } from 'react';

import { useSelector, useDispatch, RootState } from '@/redux';
import { setUserInfo } from '@/redux/modules/home';

const Home = () => {
    console.log('NODE_ENV', process.env.NODE_ENV);
    console.log('BASE_ENV', process.env.BASE_ENV);
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state: RootState) => state.home);
    const handleSetUserInfo = useCallback(() => {
        console.log('执行设置用户信息');
        dispatch(
            setUserInfo({
                age: 1,
                name: 'Home',
                email: '2095034789@qq.com',
            })
        );
    }, [dispatch]);
    return (
        <div>
            <div>Home组件</div>
            <button onClick={handleSetUserInfo}>赋值</button>
            <div>name：{userInfo?.name || '--'}</div>
            <div>age：{userInfo?.age || '--'}</div>
            <div>email：{userInfo?.email || '--'}</div>
        </div>
    );
};

export default Home;

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:36:19
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:32:55
 * @FilePath: /pnpm-react-ts-webpack5/src/components/ErrorMessage/500.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
// import React from 'react';

import { useNavigate } from 'react-router-dom';

import { HOME_URL } from '@/config/config';
const NotNetwork: React.FC = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate(HOME_URL);
    };

    return (
        <div>
            <h1>500</h1>
            <button onClick={goHome}>返回首页</button>
        </div>
    );
};

export default NotNetwork;

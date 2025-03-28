/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:30:08
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 17:30:31
 * @FilePath: /pnpm-react-ts-webpack5/src/components/Loading/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React from 'react';

import './index.less';
const Loading = ({ color = 'default' }: { color?: string }) => {
    return (
        <div color={color} className="request-loading">
            loading
        </div>
    );
};

export default Loading;

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 16:42:07
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 16:47:14
 * @FilePath: /pnpm-react-ts-webpack5/src/layouts/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { JSX } from 'react';

import { App1 } from '@/App';

import Menus from './menu';

// import { Outlet } from 'react-router-dom';

const Layouts = (props: { children: JSX.Element }) => {
    return (
        <div className="layouts" style={{ display: 'flex' }}>
            <div>
                <Menus>
                    <App1 />
                </Menus>
            </div>
            <div>{props.children}</div>
        </div>
    );
};

export default Layouts;

/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 16:44:14
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 16:48:16
 * @FilePath: /pnpm-react-ts-webpack5/src/layouts/menu/index.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import React, { JSX } from 'react';

const Menus = (props: { children: JSX.Element }) => {
    return <div className="layouts">{props.children}</div>;
};

export default Menus;

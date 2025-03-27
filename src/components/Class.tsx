/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-26 15:18:28
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 19:51:36
 * @FilePath: /pnpm-react-ts-webpack5/src/components/Class.tsx
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */

import React, { PureComponent, ReactNode } from 'react';

// 定义更具体的构造函数类型
interface ClassComponent extends PureComponent {
    age?: number;
}

type ClassConstructor = new (...args: any[]) => ClassComponent;

// 使用更明确的类型定义装饰器
function addAge<T extends ClassConstructor>(Target: T): T {
    return class extends Target {
        constructor(...args: any[]) {
            super(...args);
            this.age = 111;
        }
    };
}

// 使用装饰器
@addAge
class Class extends PureComponent {
    age?: number;

    render(): ReactNode {
        return <h2>我是类组件---{this.age}</h2>;
    }
}

export default Class;

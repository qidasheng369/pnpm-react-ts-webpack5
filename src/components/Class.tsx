/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-26 15:18:28
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-26 15:18:36
 * @FilePath: /pnpm-react-ts-webpack5/src/components/Class.tsx
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
import React, { PureComponent } from "react";

// 装饰器为,组件添加age属性
function addAge(Target: Function) {
  Target.prototype.age = 111
}
// 使用装饰圈
@addAge
class Class extends PureComponent {

  age?: number

  render() {
    return (
      <h2>我是类组件---{this.age}</h2>
    )
  }
}

export default Class

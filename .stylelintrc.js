/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-27 20:38:09
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 21:45:02
 * @FilePath: /pnpm-react-ts-webpack5/.stylelintrc.js
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
    rules: {
        // 类名允许使用驼峰命名
        'selector-class-pattern': [
            '^[a-zA-Z][a-zA-Z0-9]*$',
            {
                message: '类名应该使用驼峰命名法',
            },
        ],
        // ID 选择器允许使用驼峰命名
        'selector-id-pattern': [
            '^[a-zA-Z][a-zA-Z0-9]*$',
            {
                message: 'ID 应该使用驼峰命名法',
            },
        ],
        // 动画名称允许使用驼峰命名
        'keyframes-name-pattern': [
            '^[a-zA-Z][a-zA-Z0-9]*$',
            {
                message: '动画名称应该使用驼峰命名法',
            },
        ],
    },
};

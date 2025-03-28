/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 10:35:46
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 13:55:32
 * @FilePath: /pnpm-react-ts-webpack5/scripts/cz-config.js
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */

module.exports = {
    // type 类型
    types: [
        { value: 'feat', name: '✨ 新功能: 添加新功能' },
        { value: 'fix', name: '🐛 修复: 修复bug' },
        { value: 'docs', name: '📝 文档: 文档变更' },
        { value: 'style', name: '💄 格式: 代码格式(不影响代码运行的变动)' },
        { value: 'refactor', name: '♻️ 重构: 重构代码' },
        { value: 'perf', name: '⚡️ 性能: 性能优化' },
        { value: 'test', name: '✅ 测试: 增加测试' },
        { value: 'chore', name: '🔨 工具: 构建过程或辅助工具的变动' },
        { value: 'revert', name: '⏪️ 回退: 回退代码' },
        { value: 'build', name: '📦️ 打包: 打包发布' },
        { value: 'ci/cd', name: '👷 ci/cd: 更改持续集成或部署文件和脚本' },
        { value: 'WIP', name: '🚧 WIP: 正在施工' },
    ],

    // scope 类型
    scopes: [
        ['components', '组件相关'],
        ['hooks', 'hook 相关'],
        ['utils', 'utils 相关'],
        ['styles', '样式相关'],
        ['config', '配置相关'],
        ['deps', '项目依赖'],
        ['other', '其他修改'],
        ['custom', '以上都不是？我要自定义'],
    ].map(([value, description]) => {
        return {
            value,
            name: `${value.padEnd(30)} (${description})`,
        };
    }),

    // 交互提示信息
    messages: {
        type: '确保本次提交遵循规范！\n选择你要提交的类型:',
        scope: '\n请选择修改范围(可选):',
        customScope: '请输入修改范围(可选):',
        subject: '请简要描述提交(必填):',
        body: '请输入详细描述(可选):',
        breaking: '列出任何BREAKING CHANGES(可选):',
        footer: '请输入要关闭的issue(可选):',
        confirmCommit: '确认提交？',
    },

    // 设置只有 type 选择了 feat 或 fix，才询问 breaking message
    allowBreakingChanges: ['feat', 'fix'],

    // 跳过要询问的步骤
    skipQuestions: ['footer'],

    // subject 限制长度
    subjectLimit: 100,

    // 允许自定义范围
    allowCustomScopes: true,
};

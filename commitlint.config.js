/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 12:16:06
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 13:55:40
 * @FilePath: /pnpm-react-ts-webpack5/commitlint.config.js
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
export default {
    extends: ['@commitlint/config-conventional'],

    // 自定义规则
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
                'build',
                'ci/cd',
                'WIP',
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0],
        'subject-case': [0],
        'header-max-length': [0, 'always', 100],
    },
    types: [
        { value: 'feat', name: '✨ 新功能: 添加新功能' },
        { value: 'fix', name: '🐛 修复: 修复bug' },
        { value: 'docs', name: '📝 文档: 文档变更' },
        { value: 'style', name: '💄 格式: 代码格式(不影响代码运行的变动)' },
        { value: 'refactor', name: '♻️ 重构: 重构代码(既不是增加feature，也不是修复bug)' },
        { value: 'perf', name: '⚡️ 性能: 性能优化' },
        { value: 'test', name: '✅ 测试: 增加测试' },
        { value: 'chore', name: '🔨 工具: 构建过程或辅助工具的变动' },
        { value: 'revert', name: '⏪️ 回退: 回退代码' },
        { value: 'build', name: '📦️ 打包: 打包发布' },
        { value: 'ci/cd', name: '👷 ci/cd: 更改持续集成或部署文件和脚本' },
        { value: 'WIP', name: '🚧 WIP: 正在施工' },
    ],

    scopes: [
        ['components', '组件相关'],
        ['hooks', 'hook 相关'],
        ['utils', 'utils 相关'],
        ['styles', '样式相关'],
        ['config', '配置相关'],
        ['deps', '项目依赖'],
        ['other', '其他修改'],
        // 如果选择 custom，后面会让你再输入一个自定义的 scope
        ['custom', '以上都不是？我要自定义'],
    ].map(([value, description]) => {
        return {
            value,
            name: `${value.padEnd(30)} (${description})`,
        };
    }),

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

    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    skipQuestions: ['footer'],
    subjectLimit: 100,
};

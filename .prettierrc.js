/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-27 20:17:37
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-27 20:32:02
 * @FilePath: /pnpm-react-ts-webpack5/.prettierrc.js
 * @Description: 
 * 
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved. 
 */
module.exports = {
    printWidth: 100,         // 每行代码最大长度
    tabWidth: 4,            // 缩进空格数
    useTabs: false,         // 使用空格缩进，而不是 tab
    semi: true,             // 在语句末尾添加分号
    singleQuote: true,      // 使用单引号而不是双引号
    quoteProps: 'as-needed', // 仅在必需时为对象的key添加引号
    jsxSingleQuote: false,   // JSX中使用双引号
    trailingComma: 'es5',    // ES5中允许的尾随逗号（数组、对象等）
    bracketSpacing: true,    // 在对象字面量中的括号之间添加空格
    bracketSameLine: false,  // 将>放在最后一行的末尾，而不是单独放一行
    arrowParens: 'avoid',    // 当箭头函数只有一个参数时，省略括号
    rangeStart: 0,          // 格式化的起始位置
    rangeEnd: Infinity,     // 格式化的结束位置
    requirePragma: false,    // 是否要求文件顶部有特殊的注释才格式化
    insertPragma: false,     // 是否在文件顶部插入@format标记
    proseWrap: 'preserve',   // 不对markdown等文本进行换行
    htmlWhitespaceSensitivity: 'css', // HTML空白敏感度遵循CSS display属性
    endOfLine: 'lf'         // 使用 Linux 风格的换行符
};
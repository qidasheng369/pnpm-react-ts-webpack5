/*
 * @Author: 齐大胜 782395122@qq.com
 * @Date: 2025-03-28 17:28:13
 * @LastEditors: 齐大胜 782395122@qq.com
 * @LastEditTime: 2025-03-28 18:20:23
 * @FilePath: /pnpm-react-ts-webpack5/src/api/helper/axiosCancel.ts
 * @Description:
 *
 * Copyright (c) 2025 by 齐大胜 email: 782395122@qq.com, All Rights Reserved.
 */
import axios, { AxiosRequestConfig, Canceler } from 'axios';
import qs from 'qs';

import { isFunction } from '@/utils/is/index';

// * 声明一个 Map 用于存储每个请求的标识 和 取消函数
let pendingMap = new Map<string, Canceler>();

// * 序列化参数
export const getPendingUrl = (config: AxiosRequestConfig) =>
    [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&');

export class AxiosCanceler {
    /**
     * @description: 添加请求
     * @param {Object} config
     */
    addPending(config: AxiosRequestConfig) {
        // * 在请求开始前，对之前的请求做检查取消操作
        this.removePending(config);
        const url = getPendingUrl(config);
        config.cancelToken =
            config.cancelToken ||
            new axios.CancelToken(cancel => {
                if (!pendingMap.has(url)) {
                    // 如果 pending 中不存在当前请求，则添加进去
                    pendingMap.set(url, cancel);
                }
            });
    }

    /**
     * @description: 移除请求
     * @param {Object} config
     */
    removePending(config: AxiosRequestConfig) {
        const url = getPendingUrl(config);

        if (pendingMap.has(url)) {
            // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
            const cancel = pendingMap.get(url);
            // cancel && cancel();
            cancel?.();
            pendingMap.delete(url);
        }
    }

    /**
     * @description: 清空所有pending
     */
    removeAllPending() {
        pendingMap.forEach(cancel => {
            // cancel && isFunction(cancel) && cancel();
            if (cancel && isFunction(cancel)) {
                cancel();
            }
        });
        pendingMap.clear();
    }

    /**
     * @description: 重置
     */
    reset(): void {
        pendingMap = new Map<string, Canceler>();
    }
}

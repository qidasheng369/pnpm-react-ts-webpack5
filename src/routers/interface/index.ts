export interface MetaProps {
    requiresAuth?: boolean;
    title: string;
    key?: string;
    permissions?: Array<string>;
}
export interface RouteObjectBak {
    caseSensitive?: boolean;
    children?: RouteObject[];
    element?: React.ReactNode;
    index?: boolean;
    path?: string;
    meta?: MetaProps;
    isLink?: string;
}

import type { NonIndexRouteObject } from 'react-router-dom';

// 扩展 react-router-dom 的 RouteObject 类型
export interface RouteObject extends Omit<NonIndexRouteObject, 'children'> {
    meta?: {
        title?: string;
        auth?: boolean;
        key?: string;
        requiresAuth?: boolean;
        permissions?: Array<string>;
    };
    children?: RouteObject[];
}

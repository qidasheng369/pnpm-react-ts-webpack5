import React, { Suspense } from 'react';

/**
 * @description 路由懒加载
 * @param {Element} Comp 要加载的组件
 * @returns element
 */
const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
    return (
        <Suspense fallback={<div>loading......</div>}>
            <Comp />
        </Suspense>
    );
};

export default lazyLoad;

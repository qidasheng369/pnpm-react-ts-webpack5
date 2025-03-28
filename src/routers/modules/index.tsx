// import React from 'react';

import { RouteObject } from '../interface/index';

import errorRouter from './error';
import globalRoutes from './globalRoutes';
import mainRoutes from './mainRoutes';

const allRouters: RouteObject[] = [...globalRoutes, ...mainRoutes, ...errorRouter];

export default allRouters;

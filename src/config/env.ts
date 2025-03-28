const BASE_ENV: any = process.env.BASE_ENV || 'development'; // 当前环境

interface AnyObject {
    [propName: string]: any;
}

const API_URL_CONFIG: AnyObject = {
    development: 'https://www.baidu.com',
    production: '/api/prod',
    preRelease: '/api/pre',
};

export const API_URL = API_URL_CONFIG[BASE_ENV];

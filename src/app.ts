import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  timeout: 10000,
  errorConfig: {
    // adaptor: (resData) => {
    //   return {
    //     ...resData,
    //     success: resData.ok,
    //     errorMessage: resData.message,
    //   };
    // },
  },
  middlewares: [
    // async function middlewareA(ctx, next) {
    //     console.log('A before');
    //     await next();
    //     console.log('A after');
    //   },
    //   async function middlewareB(ctx, next) {
    //     console.log('B before');
    //     await next();
    //     console.log('B after');
    //   }
  ],
  requestInterceptors: [
    (url, options) => {
      //   const User = JSON.parse(localStorage.getItem('user')) || true;
      //   if (User) {
      //     options.headers.token = User.token;
      //   }
      options.headers.token = '9527';
      const headers = {
        ...options.headers,
        'Content-Type': 'application/json;charset=UTF-8',
      };
      return {
        options: { ...options, headers },
      };
    },
  ],
  responseInterceptors: [],
};

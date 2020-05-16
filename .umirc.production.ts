import { defineConfig } from 'umi';
import routes from './config/router.config';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // favicon: '/public/favicon.ico',
  devServer: {
    port: 8000,
    https: true,
  },
  dva: {
    skipModelValidate: true,
    immer: false,
    hmr: true,
  },
  proxy: {
    '/api': {
      target: 'http://localhost:5566',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' },
    },
  },
  routes,
  request: {
    dataField: '',
  },
  hash: true,
  history: {
    type: 'hash',
  },
  plugins: [
    // npm 依赖
    // 'umi-plugin-hello',
    // 相对路径
    // './plugin',
    // 绝对路径
    // `${__dirname}/plugin.js`,
  ],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    // memo.mode('production')
    console.log(memo.get('mode'));
    //     memo，当前 webpack-chain对象
    // env，当前环境，development、production 或 test 等
    // webpack，webpack 实例，用于获取其内部插件
    // createCSSRule，用于扩展其他 CSS 实现，比如 sass, stylus
    // await delay(100);
    // 设置 alias
    // memo.resolve.alias.set('foo', '/tmp/a/b/foo');
    // 删除 umi 内置插件
    // memo.plugins.delete('progress');
    // memo.plugins.delete('friendly-error');
    // memo.plugins.delete('copy');

    // memo.plugin('extract-css').tap(args => {
    //   return [
    //     {
    //       ...args[0],
    //       filename: 'css/[name].css',
    //       chunkFilename: 'css/[name].chunk.css',
    //     },
    //   ];
    // });
  },
  //publicPath: '/static/'
});

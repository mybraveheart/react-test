import { ApplyPluginsType } from '/opt/gitlab/cn-monthly-frontend/node_modules/_@umijs_runtime@3.1.2@@umijs/runtime';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };

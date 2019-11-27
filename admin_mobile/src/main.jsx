// 引入React
import React from 'react';
// 渲染库
import { render } from 'react-dom';
// 引入应用程序
// import App from './app/App';
// 引入路由规则
import routes from './router/router';
// 引入Provider
import { Provider } from 'react-redux';
// 引入store
import store from './store';

// 渲染组件
// render(<App></App>, document.getElementById('app'))

// 渲染路由
// render(routes, document.getElementById('app'));

// 通过Provider为routes中的app提供store
render(<Provider store={store}>{routes}</Provider>, document.getElementById('app'))

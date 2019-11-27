// 引入react
import React from 'react';
// 引入路由
import { HashRouter, Route } from 'react-router-dom';
// 引入应用程序
import App from '../app/App';
// 接收数据的方法
import { deal } from '../store';

// 2 确定渲染策略
// export default (
// 	<HashRouter>
// 		<App></App>
// 	</HashRouter>
// )
// 通过route引入dealApp
export default (
	<HashRouter>
		<Route path="/" component={deal(App)}></Route>
	</HashRouter>
)
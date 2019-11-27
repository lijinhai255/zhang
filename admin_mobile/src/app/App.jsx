// 引入react
import React, { Component } from 'react';
// 使用antd-mobile
// import { Button } from 'antd-mobile';
// 引入acios
// import axios from 'axios';
// 引入高阶组件拓展方法
import { withRouter } from 'react-router-dom';
// 引入组件
import Home from '../pages/Home';
import Login from '../pages/login/Login';
// 引入拓展方法
import { deal } from '../store';
// 引入action
import { getUserInfo } from '../actions';
// 引入样式
import './App.less';

// 定义组件
export default class App extends Component {
	// 组件即将创建
	componentWillMount() {
		// 发布异步aciton
		this.props.dispatch(getUserInfo())
	}
	render() {
		// console.log(this.props)
		// 解构数据
		let { state, dispatch, history } = this.props;
		// 数据存储在store中
		if (state.username) {
			// 用户名存在渲染Home
			// 1 属性传递
			return <Home state={state} history={history}></Home>
			// 2 高阶组件
			// let DealHome = withRouter(Home);
			// return <DealHome state={state}></DealHome>
		} else {
			// 不存在渲染登录页面
			// return <Login></Login>
			// 高级组件
			// let DealLogin = deal(Login);
			// return <DealLogin></DealLogin>
			// 属性传递
			return <Login dispatch={dispatch}></Login>
		}
	}
}
// export default class App extends Component {
// 	// 构造函数
// 	constructor(props) {
// 		super(props);
// 		// 状态
// 		this.state = {
// 			username: ''
// 		}
// 	}
// 	// 组件创建的时候请求
// 	componentWillMount() {
// 		// 请求数据
// 		axios.get('/admin/userinfo')
// 			// 监听数据返回
// 			.then(({ data }) => {
// 				// 如果请求成功
// 				if (data.errno === 0) {
// 					// 存储用户名
// 					this.setState(data.data)
// 				}

// 			})
// 	}
// 	render() {
// 		console.log(this.props)
// 		// 如果有用户名，要渲染首页
// 		if (this.state.username) {
// 			return <Home></Home>
// 		} else {
// 			// 子组件向父组件通信
// 			return <Login method={username => this.setState({ username })}></Login>
// 		}
// 		// 否则渲染登录页面
// 		// return (
// 		// 	<div>
// 		// 		<h1>app page</h1>
// 		// 		{/*<Button>按钮</Button>*/}
// 		// 	</div>
// 		// )
// 	}
// }
// 引入react
import React, { Component } from 'react';
// 引入组件
import { InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
// 引入校验的方法
import { checkUserName, checkPassword, checkPasswordAgain } from '../../tools/validator';
// 引入axios
import axios from 'axios';
// 定义组件
export default class Main extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			username: '',
			password: '',
			passwordAgain: ''
		}
	}
	// 提交数据
	submitData() {
		// 解构
		let { username, password, passwordAgain } = this.state;
		// 校验数据
		if (
			checkUserName(username) && 
			checkPassword(password) && 
			checkPasswordAgain(passwordAgain, password)
		) {
			// console.log(this.state)
			// 发送请求
			axios.post('/admin/manager/update', { username, password })
				// 监听数据返回
				.then(({ data }) => {
					// 如果提交成功 
					if (data.errno === 0) {
						// 刷新页面重新登录
						location.reload()
					} else {
						// 提示错误
						alert(data.msg)
					}
				})
		}
	}
	render() {
		// 解构
		let { username, password, passwordAgain } = this.state;
		return (
			<div className="page-main">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入用户名" value={username} onChange={username => this.setState({ username })}>用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入密码" type="password" value={password} onChange={password => this.setState({ password })}>密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请重复输入密码" type="password" value={passwordAgain} onChange={passwordAgain => this.setState({ passwordAgain })}>重复密码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button type="primary" onClick={e => this.submitData()}>提交</Button>
				</WingBlank>
			</div>
		)
	}
}
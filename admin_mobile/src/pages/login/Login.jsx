// 引入react
import React, { Component } from 'react';
// 引入组件
import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile'
// 引入校验方法
import { checkUserName, checkPassword } from '../../tools/validator';
// 引入axios
import axios from 'axios';
// 引入action
import { saveUserName, userLogin } from '../../actions';
// 引入样式
import './Login.less'
// 定义组件
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props)
		// 状态
		this.state = {
			username: '',
			password: ''
		}
	}
	// 提交数据
	submitData() {
		// 解构数据
		let { username, password } = this.state;
		// 校验表单数据
		if (
			checkUserName(username) && 
			checkPassword(password)
		) {
			// 发布异步action进行登录
			this.props.dispatch(userLogin(this.state))
			// 提交数据
			// axios.post('/admin/login', this.state)
			// 	// 监听数据返回
			// 	.then(({ data }) => {
			// 		// 如果登录成功
			// 		if (data.errno === 0) {
			// 			// 向父组件提交数据
			// 			// this.props.method(data.data.username)
			// 			// 通过dispatch发布消息
			// 			this.props.dispatch(saveUserName(data.data.username))
			// 		} else {
			// 			// 提示错误
			// 			alert(data.msg)
			// 		}
			// 	})
		}
	}
	render() {
		// console.log(this.props)
		// 解构
		let { username, password } = this.state;
		return (
			<div className="page-login">
				{/*input元素回调函数参数是事件对象，InputItem参数是内容值*/}
				<InputItem placeholder="请输入用户名" value={username} onChange={username => this.setState({ username })}>用户名</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem type="password" placeholder="请输入密码" value={password} onChange={password => this.setState({ password })}>密　码</InputItem>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				<WingBlank>
					<Button onClick={e => this.submitData()} type="primary">登录</Button>
				</WingBlank>
			</div>
		)
	}
}
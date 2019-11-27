// 引入消息类型
import { LOGIN } from '../consts';
// 引入acios
import axios from 'axios';
// 定义消息
// 动态消息：存储用户名
export let saveUserName = (username) => {
	return { type: LOGIN, data: username }
}

// 异步aciton
// export let getUserInfo = () => {
// 	return dispatch => {}
// }
export let getUserInfo = res => dispatch => {
	// 发布异步请求
	axios.get('/admin/userinfo')
		// 监听数据返回
		.then(({ data }) => {
			// 如果登录过
			if (data.errno === 0) {
				// 发布同步消息，存储用户名
				dispatch(saveUserName(data.data.username))
			}
		})
}

// 定义异步消息
// 用户登录
// export let userLogin = data => {
// 	// 不需要处理data，直接发布异步请求
// 	return dispatch => {

// 	}
// }
// 省略写法
export let userLogin = data => dispatch => {
	// 发布异步请求
	axios.post('/admin/login', data)
		// 监听数据返回
		.then(({ data }) => {
			// 如果登录成功
			if (data.errno === 0) {
				// 发布同步消息，存储数据
				dispatch(saveUserName(data.data.username));
			} else {
				// 登录失败，提示用户
				alert(data.msg);
			}
		})
}
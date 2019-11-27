// 引入创建页面
import LessonCreate from '../create/Create';
// 引入axios
import axios from 'axios';

// 定义组件
export default class LessonEdit extends LessonCreate {
	// 创建完成,请求数据
	componentWillMount() {
		// 请求数据
		this.getData();
	}
	// 	请求数据
	getData() {
		// 解构数据
		let { params } = this.props.match;
		// 请求数据
		axios.get('/admin/lesson/detail', { params })
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 更新数据
					this.setState(data.data)
				} else {
					// 提示用户
					alert(data.msg)
				}
			})
	}
	// 重写提交方法
	sendData() {
		// 提交数据
		axios.post('/admin/lesson/update', this.state)
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 进入列表页
					this.props.history.replace('/lesson/list/1')
				} else {
					// 提示用户
					alert(data.msg)
				}
			})
	}
	// 路由更新,请求数据
	componentDidUpdate(oldProps) {
		// 判断id更新
		if (oldProps.match.params.id !== this.props.match.params.id) {
			// 请求数据
			this.getData();
		}
	}
}


// // 引入react
// import React, { Component } from 'react';

// // 定义组件
// export default class LessonEdit extends Component {
// 	render() {
// 		return <h1> lesson eidt </h1>
// 	}
// }
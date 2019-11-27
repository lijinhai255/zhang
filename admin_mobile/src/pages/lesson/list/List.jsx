// 引入react
import React, { Component } from 'react';
// 引入组件
import { Pagination, Card, Button } from 'antd-mobile';
// 引入请求库
import axios from 'axios';
// 引入样式
import './List.less';

// 定义组件
export default class LessonList extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: []
		}
	}
	// 组件创建的时候，要请求数据
	componentWillMount() {
		// 请求数据
		this.getData();
	}
	// 获取数据
	getData() {
		// 解构params
		let { params } = this.props.match;
		// get请求
		axios.get('/admin/lesson/list', { params })
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 存储数据
					this.setState(data)
				} else {
					// 提示用户
					alert(data.msg);
				}
			})
	}
	// 路由改变的时候，要请求数据
	componentDidUpdate(oldProps) {
		// 如果路由中的页码不同，要更新数据
		if (this.props.match.params.page !== oldProps.match.params.page) {
			// 请求数据
			this.getData();
		}
	}
	// 修改页面
	changePage(page) {
		// console.log(e)
		// 更新路由
		this.props.history.push('/lesson/list/' + page)
	}
	// 定义类型映射
	get types() {
		return {
			'super': '高级课程',
			'middle': '中级课程',
			'easy': '初级课程',
			'reat': 'React课程',
			'vue': 'Vue课程',
			'angular': 'Angular课程',
		}
	}
	// 获取分类名称
	getType(id) {
		// 根据id返回名称
		return this.types[id]
	}
	// 删除课程
	removeLesson(id) {
		// 根据id删除课程
		axios.post('/admin/lesson/remove', { id })
			// 监听返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 刷新页面
					location.reload();
				} else {
					// 提示用户
					alert(data.msg)
				}
			})
	}
	// 创建卡片视图
	createCardView() {
		// 遍历data数据创建
		return this.state.data.map((item, index) => 
			<Card className="lesson-card" key={index}>
				<Card.Body>
					<img src={item.img} alt=""/>
					<h2>{item.title}</h2>
					<p>
						<span className="price">{'￥' + item.price}</span>
						<span className="type">{this.getType(item.type)}</span>
					</p>
					<p>{item.sales + '人与你一起学习'}</p>
					<div className="btns">
						<Button size="small" inline type="primary" onClick={e => this.props.history.push('/lesson/edit/' + item._id)}>修改</Button>
						<Button size="small" inline type="warning" onClick={e => this.removeLesson(item._id)}>删除</Button>
					</div>
				</Card.Body>
			</Card>
		)
	}
	render() {
		return (
			<div className="page-lesson-list">
				{this.createCardView()}
				<Pagination simple={true} current={+this.props.match.params.page} total={Infinity} onChange={e => this.changePage(e)}></Pagination>
			</div>
		)
	}
}
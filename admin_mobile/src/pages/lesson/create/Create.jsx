// 引入react
import React, { Component } from 'react';
// 引入组件
import { InputItem, Picker, ImagePicker, Button, WhiteSpace, WingBlank, List } from 'antd-mobile';
// 引入axios
import axios from 'axios';
// 引入校验算法
import { checkTitle, checkNotEmpty } from '../../../tools/validator';

// 定义组件
export default class LessonCreate extends Component {
	// 状态数据
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			img: '',
			title: '',
			price: '',
			sales: '',
			type: ''
		}
	}
	// 特性属性数据
	get typeData() {
		return [
			{ value: 'super', label: '高级课程' },
			{ value: 'middle', label: '中级课程' },
			{ value: 'easy', label: '初级课程' },
			{ value: 'react', label: 'React课程' },
			{ value: 'vue', label: 'Vue课程' },
			{ value: 'angular', label: 'Angular课程' }
		]
	}
	// 根据type值，获取显示的label值
	getTypeLabel() {
		// 在typeData中，寻找value值与type相等的成员
		let obj = this.typeData.find(item => item.value === this.state.type);
		// 返回对象的label属性
		return obj ? obj.label : '请选择类型';
	}
	// 上传图片事件
	uploadFile(fileArray) {
		// 获取上传的图片
		// 最后一个成员是上传的图片。
		// let file = fileArray.pop().file;
		let file = fileArray[fileArray.length - 1].file;
		// 模拟表单上传，所要创建一个表单
		let form = new FormData();
		// 添加file字段
		form.append('file', file)
		// 提交数据
		axios.post('/admin/lesson/upload', form)
			// 监听数据返回
			.then(({ data }) => {
				// 如果提交成功
				if (data.errno === 0) {
					// 存储数据
					// this.setState({ img: data.data.img})
					// 简写
					this.setState(data.data);
				} else {
					// 提示用户
					alert(data.msg);
				}
			})
		console.log(fileArray)
	}
	// 提交数据
	submitData() {
		// 解构所有字段
		let { title, sales, price, type, img } = this.state;
		// 校验所有字段
		if (
			checkTitle(title) &&
			checkNotEmpty(price, ['请输入价格']) && 
			checkNotEmpty(type, ['请选择分类']) && 
			checkNotEmpty(sales, ['请输入销量']) && 
			checkNotEmpty(img, ['请选择图片'])
		) {
			// console.log(123)
			// 提交数据
			this.sendData();
		}
	}
	// 提交请求，发送数据
	sendData() {
		// console.log(this.state)
		// 发送请求
		axios.post('/admin/lesson/create', this.state)
			// 监听数据返回
			.then(({ data }) => {
				// 如果成功
				if (data.errno === 0) {
					// 进入列表页
					this.props.history.replace('/lesson/list/1')
				} else {
					// 提示错误
					alert(data.msg)
				}
			})
	}
	render() {
		// 解构
		let { img, title, price, sales, type } = this.state;
		return (
			<div className="page-lesson-create">
				<WhiteSpace></WhiteSpace>
				<WhiteSpace></WhiteSpace>
				{/*实现约束性组件*/}
				<InputItem placeholder="请输入课程标题" value={title} onChange={title => this.setState({ title })}>课程标题</InputItem>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入课程价格" type="number" value={price} onChange={price => this.setState({ price })}>课程价格</InputItem>
				<WhiteSpace></WhiteSpace>
				<Picker data={this.typeData} cols={1} onChange={arr => this.setState({ type: arr[0] })}>
					{/*根据type的值，获取label值*/}
					<List.Item>选择分类&emsp;{this.getTypeLabel()}</List.Item>
				</Picker>
				<WhiteSpace></WhiteSpace>
				<InputItem placeholder="请输入课程销量" type="number" value={sales} onChange={sales => this.setState({ sales })}>课程销量</InputItem>
				<WhiteSpace></WhiteSpace>
				<ImagePicker files={img ? [{ url: img }] : []} onChange={e => this.uploadFile(e)}></ImagePicker>
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
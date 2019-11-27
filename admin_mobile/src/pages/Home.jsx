// 引入react
import React, { Component } from 'react';
// 引入路由组件
import { Switch, Route, Link } from 'react-router-dom';
// 引入组件
import { NavBar, Menu } from 'antd-mobile';
// 引入组件
// 课程
import LessonCreate from './lesson/create/Create';
import LessonList from './lesson/list/List';
import LessonEdit from './lesson/edit/Edit';
// 用户
import UserCreate from './user/create/Create';
import UserList from './user/list/List';
import UserEdit from './user/edit/Edit';
// 默认
import Main from './main/Main';
// 引入样式文件
import './Home.less';

// 定义组件
export default class Home extends Component {
	// 状态数据
	constructor(props) {
		super(props);
		// 状态数据
		this.state = {
			// 是否显示菜单
			isShowMenu: false
		}
	}
	// 如果菜单数据不变，放在组件自身，如果数据可变，放在状态中
	get menuData() {
		return [
			// 导航模块
			{
				label: '课程模块',
				value: 'lesson',
				children: [
					{ label: '创建课程', value: 'create' },
					{ label: '课程列表', value: 'list/1' }
				]
			},
			{
				label: '用户模块',
				value: 'user',
				children: [
					{ label: '创建用户', value: 'create' },
					{ label: '用户列表', value: 'list/1' }
				]
			}
		]
	}
	// 定义事件
	menuChange(arr) {
		// console.log(arr)
		// 存储状态用push，不存储用replace
		this.props.history.push('/' + arr.join('/'))
		// 切换完页面，要隐藏菜单
		this.setState({ isShowMenu: false })
	}
	render() {
		// console.log(this.props)
		return (
			<div className="page-home">
				{/*<h1>Home page--{this.props.state.username}</h1>*/}
				<NavBar
					leftContent="菜单"
					rightContent={<a className="nav-title" href="/admin/logout">{this.props.state.username}</a>}
					onLeftClick={e => this.setState({ isShowMenu: !this.state.isShowMenu })}
				>
					<Link to="/" className="nav-title">爱创课堂</Link>
				</NavBar>
				{this.state.isShowMenu ? <Menu data={this.menuData} onChange={e => this.menuChange(e)}></Menu> : ''}
				{/* 1 路由渲染位置 */}
				<Switch>
					<Route path="/lesson/create" component={LessonCreate}></Route>
					<Route path="/lesson/list/:page" component={LessonList}></Route>
					<Route path="/lesson/edit/:id" component={LessonEdit}></Route>
					<Route path="/user/create" component={UserCreate}></Route>
					<Route path="/user/list/:page" component={UserList}></Route>
					<Route path="/user/edit/:id" component={UserEdit}></Route>
					<Route path="*" component={Main}></Route>
				</Switch>
			</div>
		)
	}
}
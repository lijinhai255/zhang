// 引入创建store的方法
import { createStore, applyMiddleware } from 'redux';
// 引入connet方法
import { connect } from 'react-redux';
// 引入异步action库
import thunkMiddleware from 'redux-thunk';
// 引入reducer
import reducer from '../reducers';

// 定义组件接收store数据的方法
// 如何接收state数据
function mapStateToProps(state) {
	return { state }
}
// 如何接收dispatch方法
function mapDispatchToProps(dispatch) {
	return { dispatch }
}
// 定义接收的方法
export let deal = connect(mapStateToProps, mapDispatchToProps);


// 拓展createStore
// let newCreateStore = applyMiddleware(thunkMiddleware)(createStore);
// // 用新的方法，创建store
// export default newCreateStore(reducer)
// 合并成一步
export default applyMiddleware(thunkMiddleware)(createStore)(reducer);

// 创建store, 如果有多个reducer，使用combineReducers。
// export default createStore(reducer);

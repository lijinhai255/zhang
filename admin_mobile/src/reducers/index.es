// 引入类型
import { LOGIN } from '../consts';
// 定义reducer
// export default function reducer(state = { username: '' }, action) {
export default function reducer(state = { username: 'YYQH' }, action) {
	// 定义结果对象
	let result = {};
	// 判断消息类型
	switch (action.type) {
		// 如果是登录的消息
		case LOGIN:
			// 更新用户名
			result.username = action.data;
			break;
	}
	// 合并对象
	return Object.assign({}, state, result);
}
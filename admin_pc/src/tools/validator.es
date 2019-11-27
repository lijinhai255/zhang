// 定义校验数据的方法
// 方法有三个参数：filed：字段信息, value：字段的值, callback：必须执行，参数如果是error就是提示的错误
// 用户名校验
export let checkUsername = (filed, value, callback) => {
	// 不能为空
	if (!value) {
		// 提示错误
		return callback(new Error('用户名不能为空'))
	}
	// 用户名是4-10位的字母数字下划线
	if (!/^\w{4,10}$/.test(value)) {
		return callback(new Error('用户名是4-10位的字母数字下划线'))
	}
	// 校验通过
	callback();
}
// 密码校验
export let checkPassword = (filed, value, callback) => {
	// 密码不能为空
	if (!value) {
		// 提示错误
		return callback(new Error('密码不能为空'))
	}
	// 包括字母和数字
	if (!/[a-zA-Z].*\d|\d.*[a-zA-Z]/.test(value)) {
		// 提示错误
		return callback(new Error('密码必须包含字母和数字'))
	}
	// 校验通过
	callback();
}
// 重复密码校验
// 为了可以更改this,我们要定义成普通的函数
export function checkPasswordAgain(filed, value, callback) {
	// 重复密码不能为空
	if (!value) {
		// 提示错误
		return callback(new Error('重复密码不能为空'))
	}
	// 如果两个密码不匹配
	if (value !== this.manager.password) {
		// 提示错误
		return callback(new Error('密码和重复密码必须一致'))
	}
	// console.log(this.manager.password)
	// 校验通过
	callback();
}
// 校验标题
export function checkTitle(filed, value, callback) {
	// 不能为空
	if (!value) {
		return callback(new Error('请输入数据'))
	}
	// 标题2-20位
	if (!/^.{2,20}$/.test(value)) {
		// 提示用户
		return callback(new Error('标题是2-20位的'))
	}
	// 校验通过
	callback();
}
// 校验必填的
export function checkNotEmpty(filed, value, callback) {
	// 不能为空
	if (!value) {
		return callback(new Error('请输入数据'))
	}
	// 校验通过
	callback();
}
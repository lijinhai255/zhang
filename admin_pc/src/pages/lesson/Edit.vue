<template>
<div>
	<h1 class="page-title">课程修改</h1>
	<!-- 1 绑定数据 -->
	<!-- 表单校验 -->
	<!-- 1 设置校验数据 -->
	<!-- 2 设置校验字段 -->
	<!-- 3 设置校验规则 -->
	<!-- 绑定事件 -->
	<el-form :model="data" :rules="rules" label-width="150px">
		<el-form-item label="课程标题" prop="title">
			<el-input placeholder="请输入课程标题" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="课程价格" prop="price">
			<el-input placeholder="请输入课程价格" type="number" v-model="data.price"></el-input>
		</el-form-item>
		<el-form-item label="课程分类" prop="type">
			<el-select placeholder="请选择课程分类" v-model="data.type">
				<el-option v-for="(item, index) in types" :key="index" :label="item.text" :value="item.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="课程销量" prop="sales">
			<el-input placeholder="请输入课程销量" type="number" v-model="data.sales"></el-input>
		</el-form-item>
		<el-form-item label="课程图片" prop="img">
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="uploadSuccess"
				:on-error="uploadError"
			>
				<el-button type="primary">上传</el-button>
				<span slot="tip" class="lesson-upload-tip">请选择上传的图片</span>
			</el-upload>
			<img v-if="data.img" :src="data.img" alt="" class="lesson-upload-img">
		</el-form-item>
		<div class="form-btn-container">
			<el-button type="success" @click="submitData">提交</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入校验规则
import { checkTitle, checkNotEmpty } from '../../../tools/validator';
// 组件
export default {
	// 数据
	data() {
		// 创建一组公用的校验规则
		let notEmptyRule = [{ validator: checkNotEmpty, trigger: 'blur' }];
		return {
			types: [
				{ text: '高级课程', id: 'super' },
				{ text: '中级课程', id: 'middle' },
				{ text: '初级课程', id: 'easy' },
				{ text: 'React课程', id: 'react' },
				{ text: 'Vue课程', id: 'vue' },
				{ text: 'Angular课程', id: 'angular' }
			],
			data: {
				img: '',
				price: '',
				sales: '',
				type: '',
				title: '',
				_id: ''
			},
			// 校验规则
			rules: {
				title: [{ validator: checkTitle, trigger: 'blur' }],
				price: notEmptyRule,
				sales: notEmptyRule,
				img: notEmptyRule,
				type: notEmptyRule
			}
		}
	},
	// 定义方法
	methods: {
		// 获取数据
		getData() {
			// 获取课程id
			let { params } = this.$route;
			// 发送请求
			this.$http
				// get请求
				.get('/admin/lesson/detail', { params })
				// 监听数据返回
				.then(({ data }) => {
					// 如果数据成功，存储数据
					if (data.errno === 0) {
						// 存储数据
						this.data = data.data;
					} else {
						// 提示错误
						alert(data.msg);
					}
				})
		},
		// 上传成功
		uploadSuccess({ errno, data, msg }) {
			// console.log(res)
			// 如果上传成功
			if (errno === 0) {
				// 更新图片
				this.data.img = data.img;
			} else {
				// 失败，提示用户
				alert(msg)
			}
		},
		// 上传失败
		uploadError() {},
		// 提交数据
		submitData() {
			// 发送请求
			this.$http
				// post请求
				.post('/admin/lesson/update', this.data)
				// 监听数据返回
				.then(({ data }) => {
					// 如果成功
					if (data.errno === 0) {
						// 进入列表页，查看修改的结果
						this.$router.replace('/lesson/list/1')
					} else {
						// 如果失败
						alert(data.msg)
					}
				})
		}
	},
	// 组件创建完成
	created() {
		// 发送请求
		this.getData();
	},
	// 路由改变，发送请求
	watch: {
		// 路由改变
		$route() {
			// 发送请求
			this.getData();
		}
	}
}
</script>

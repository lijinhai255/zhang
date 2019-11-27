<template>
<div>
	<h1 class="page-title">创建课程</h1>
	<!-- 1 为input绑定数据 -->
	<!-- 表单校验 -->
	<!-- 1 form设置绑定的数据 -->
	<!-- 2 input设置校验的属性 -->
	<!-- 3 定义校验规则 -->
	<!-- 4 绑定提交事件 -->
	<!-- 5 设置ref -->
	<el-form ref="lesson" label-width="150px" :model="data" :rules="rules">
		<el-form-item label="课程标题：" prop="title">
			<el-input placeholder="请输入课程标题" v-model="data.title"></el-input>
		</el-form-item>
		<el-form-item label="课程价格：" prop="price">
			<el-input placeholder="请输入课程价格" type="number" v-model="data.price"></el-input>
		</el-form-item>
		<el-form-item label="课程分类：" prop="type">
			<!-- 课程分类是下拉框 -->
			<el-select placeholder="请选择课程类别" v-model="data.type">
				<el-option v-for="(item, index) in types" :key="index" :label="item.text" :value="item.id"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="课程销量：" prop="sales">
			<el-input placeholder="请输入课程销量" type="number" v-model="data.sales"></el-input>
		</el-form-item>
		<el-form-item label="课程图片：" prop="img">
			<!-- 上传图片用上传组件 -->
			<el-upload
				action="/admin/lesson/upload"
				:show-file-list="false"
				:on-success="imageUploaded"
				:on-error="uploadFail"
			>
				<!-- 定义上传的按钮 -->
				<el-button type="primary">上传</el-button>
				<span slot="tip" class="lesson-upload-tip">请选择上传的图片</span>
			</el-upload>
			<img class="lesson-upload-img" :src="data.img" v-if="data.img" alt="">
		</el-form-item>
		<div class="form-btn-container">
			<el-button type="success" @click="submitData">提交</el-button>
		</div>
	</el-form>
</div>
</template>
<script type="text/javascript">
// 引入的校验规则
import { checkNotEmpty, checkTitle } from '../../../tools/validator';
// 定义数据
export default {
	// 数据
	data() {
		// 定义通用规则
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
			// 课程数据
			data: {
				img: '',
				title: '',
				sales: '',
				price: '',
				type: ''
			},
			// 定义表单校验规则
			rules: {
				// 校验标题
				title: [{ validator: checkTitle, trigger: 'blur' }],
				price: notEmptyRule,
				sales: notEmptyRule,
				type: notEmptyRule,
				img: notEmptyRule
			}
		}
	},
	// 定义方法
	methods: {
		// 图片上传完成，执行的方法
		imageUploaded({ errno, data, msg }) {
			console.log(data.img);
			console.log(errno);
			// 如果上传成功
			if (errno === 0) {
				// 存储图片地址
				this.data.img = data.img
			} else {
				// 提示用户错误
				alert(msg)
			}
		},
		// 上传图片失败
		uploadFail() {
			// console.log(arguments)
		},
		// 提交数据
		submitData() {
			// 校验表单
			this.$refs.lesson.validate(valid => {
				console.log(this.data);
				// 表单合法
				if (valid) {
					// 提交数据
					this.$http
						// post请求
						.post('/admin/lesson/create', this.data)
						// 监听返回
						.then(({ data }) => {
							// 如果上传成功
							if (data.errno === 0) {
								// 进入列表页
								this.$router.replace('/lesson/list/1')
							} else {
								// 提示错误
								alert(data.msg)
							}
						})
				}
				// console.log(valid)
			})
		}
	}
}
</script>
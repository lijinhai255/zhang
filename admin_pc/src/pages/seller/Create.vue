<template>
	<div>
		<h1 class="page-title">创建商家</h1>
		<!-- 1 为input绑定数据 -->
		<!-- 表单校验 -->
		<!-- 1 form设置绑定的数据 -->
		<!-- 2 input设置校验的属性 -->
		<!-- 3 定义校验规则 -->
		<!-- 4 绑定提交事件 -->
		<!-- 5 设置ref -->
		<el-form ref="lesson" label-width="150px" :model="data" :rules="rules">
			<el-form-item label="商家名称：" prop="name">
				<el-input placeholder="请输入商家名称" v-model="data.name"></el-input>
			</el-form-item>
			<el-form-item label="配送专员：" prop="description">
				<el-input placeholder="请输入商家名称" v-model="data.description"></el-input>
			</el-form-item>
			<el-form-item label="配送时间：" prop="deliveryTime">
				<el-input placeholder="请输入配送时间" type="number" v-model="data.deliveryTime"></el-input>
			</el-form-item>
			<el-form-item label="平均评分：" prop="score">
				<el-input placeholder="请输入平均分" type="number" v-model="data.score"></el-input>
			</el-form-item>
			<el-form-item label="配送评分：" prop="serviceScore">
				<el-input placeholder="请输入配送评分" type="number" v-model="data.serviceScore"></el-input>
			</el-form-item>
			<el-form-item label="食物评分：" prop="foodScore">
				<el-input placeholder="请输入食物评分" type="number" v-model="data.foodScore"></el-input>
			</el-form-item>
			<el-form-item label="好评率：" prop="rankRate">
				<el-input placeholder="请输入好评率" type="number" v-model="data.rankRate"></el-input>
			</el-form-item>
			<el-form-item label="配送最低价：" prop="minPrice">
				<el-input placeholder="请输入配送最低价" type="number" v-model="data.minPrice"></el-input>
			</el-form-item>
			<el-form-item label="配送费：" prop="deliveryPrice">
				<el-input placeholder="请输入配送费" type="number" v-model="data.deliveryPrice"></el-input>
			</el-form-item>
			<el-form-item label="评级计数：" prop="ratingCount">
				<el-input placeholder="请输入评级计数" type="number" v-model="data.ratingCount"></el-input>
			</el-form-item>
			<el-form-item label="总评分：" prop="sellCount">
				<el-input placeholder="请输入评级计数" type="number" v-model="data.sellCount"></el-input>
			</el-form-item>
			<el-form-item label="商家介绍" prop="bulletin">
				<el-input type="textarea" v-model="data.bulletin"></el-input>
			</el-form-item>
			<el-form-item label="商家支持" prop="supports">
				<el-checkbox-group v-model="data.supports">
					<el-checkbox-button label="在线支付满28减5" name="supports"></el-checkbox-button>
					<el-checkbox-button label="VC无限橙果汁全场8折" name="supports"></el-checkbox-button>
					<el-checkbox-button label="单人精彩套餐" name="supports"></el-checkbox-button>
					<el-checkbox-button label="该商家支持发票,请下单写好发票抬头" name="supports"></el-checkbox-button>
					<el-checkbox-button label="已加入“外卖保”计划,食品安全保障" name="supports"></el-checkbox-button>
				</el-checkbox-group>
			</el-form-item>
			<el-form-item label="商家banner：" prop="avatar">
				<!-- 上传图片用上传组件 -->
				<el-upload action="/admin/seller/upload" 
				:show-file-list="false" 
				:on-success="imageUploaded" :on-error="uploadFail">
					<!-- 定义上传的按钮 -->
					<el-button type="primary">上传</el-button>
					<span slot="tip" class="lesson-upload-tip">请选择上传的图片</span>
				</el-upload>
				<img class="lesson-upload-img" :src="data.avatar" v-if="data.avatar" alt="">
			</el-form-item>
			 <el-form-item label="商家环境：" prop="pics" >
				<!-- 上传图片用上传组件 -->
				 <el-upload action="/admin/seller/upload"
				:show-file-list="false"
				:on-success="imageUploadeds" 
				:on-error="uploadFail"
				multiple>
					<!-- 定义上传的按钮-->
					<el-button type="primary">上传</el-button>
					 <span slot="tip" class="lesson-upload-tip">请选择上传的图片</span> 
				 </el-upload> 
				 <template v-if="data.pics">
					<img v-for="(item, index) in data.pics "  :key="index" class="lesson-upload-img" :src="item"  alt=""/>
				 </template>
			</el-form-item>
			<el-form-item label="商家营业信息" prop="infos">
				<el-input type="textarea" v-model="data.infos"></el-input>
			</el-form-item>
			<div class="form-btn-container">
				<el-button type="success" @click="submitData">提交</el-button>
			</div>
		</el-form>
	</div>
</template>
<script type="text/javascript">
	// 引入的校验规则
	import {
		checkNotEmpty,
		checkTitle
	} from '../../../tools/validator';
	// 定义数据
	export default {
		// 数据
		data() {
			// 定义通用规则
			let notEmptyRule = [{
				validator: checkNotEmpty,
				trigger: 'blur'
			}];
			return {
				types: [{
						text: '高级课程',
						id: 'super'
					},
					{
						text: '中级课程',
						id: 'middle'
					},
					{
						text: '初级课程',
						id: 'easy'
					},
					{
						text: 'React课程',
						id: 'react'
					},
					{
						text: 'Vue课程',
						id: 'vue'
					},
					{
						text: 'Angular课程',
						id: 'angular'
					}
				],
				// 课程数据
				data: {
					name: '',
					description: '',
					deliveryTime: '',
					score: '',
					serviceScore: '',
					foodScore: '',
					rankRate: '',
					minPrice: '',
					deliveryPrice: '',
					ratingCount: '',
					sellCount: '',
					bulletin: '',
					supports: [],
					avatar: '',
					pics:[],
					infos: ''
				},
				// 定义表单校验规则
				rules: {
					// 校验标题
					name: [{
						validator: checkTitle,
						trigger: 'blur'
					}],
					description: notEmptyRule,
					deliveryTime: notEmptyRule,
					score: notEmptyRule,
					serviceScore: notEmptyRule,
					foodScore: notEmptyRule,
					rankRate: notEmptyRule,
					minPrice: notEmptyRule,
					deliveryPrice: notEmptyRule,
					ratingCount: notEmptyRule,
					sellCount: notEmptyRule,
					bulletin: notEmptyRule,
					supports: notEmptyRule,
					avatar: notEmptyRule,
					// pics: notEmptyRule,
					infos: notEmptyRule,
				}
			}
		},
		// 定义方法
		methods: {
			imageUploadeds({
				errno,
				data,
				msg
			}) {
				console.log(data.img);
				console.log(errno);
				// 如果上传成功
				if (errno === 0) {
					// 存储图片地址
					this.data.pics.push(data.img);
					console.log(this.data.pics,"pics")
					
				} else {
					// 提示用户错误
					alert(msg)
				}
			},
			// 图片上传完成，执行的方法
			imageUploaded({
				errno,
				data,
				msg
			}) {
				console.log(data.img);
				console.log(errno);
				// 如果上传成功
				if (errno === 0) {
					// 存储图片地址
					this.data.avatar = data.img
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
				console.log(this.data);
				this.$refs.lesson.validate(valid => {
					// 表单合法
					if (valid) {
						// 提交数据
						this.$http
							// post请求
							.post('/admin/seller/create', this.data)
							// 监听返回
							.then(({
								data
							}) => {
								// 如果上传成功
								if (data.errno === 0) {
									// 进入列表页
									this.$router.replace('/seller/list/1')
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

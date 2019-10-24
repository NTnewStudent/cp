<template>
	<view class="bg-white">

		<!-- 灰色线 -->
		<view class="hotline " style="background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->

		<view class="top_info padding-lr padding-top ">

			<view class="line">
			</view>

			<text>主要业务</text>

		</view>

		<!-- 编辑 主要业务-->
		<view class="cu-form-group margin-top ">
			<textarea maxlength="-1" v-model="formdata.import_trans" :disabled="modalName!=null" placeholder="请修改内容"></textarea>
		</view>


		<!-- 灰色线 -->
		<view class="hotline " style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->

		<view class="top_info padding-lr padding-top">

			<view class="line">
			</view>

			<text>公司介绍</text>

		</view>
		<!-- 编辑 主要业务 -->
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" v-model="formdata.info_desc" :disabled="modalName!=null" placeholder="请修改内容"></textarea>
		</view>

		<!-- 灰色线 -->
		<view class="hotline" style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->

		<!-- 上传 -->
		<view class="" style="width: 90%;margin-left: 5%;height: 100upx;">
			<button class="cu-btn block bg-blue margin-tb-sm lg" @tap="send">
				<text class=" cuIconfont-spin" :class=" loading "></text> {{text}}
			</button>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				loading: '', //图片加载状态 cuIcon-loading2
				text: '提交', //文字提示
				formdata: {
					info_desc: '',
					import_trans: ''
				}
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			//提交参数
			send: function() {
				//修改状态
				this.text = '提交中...';
				this.loading = 'cuIcon-loading2';
				var self = this

				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"
				
				this.formdata.token = token
				
				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/updateCompanyEdit', //仅为示例，并非真实接口地址。
					data: this.formdata,
					method:'POST',
					success: (res) => {
						if (res.data.code == 200) {
							uni.showToast({
								title: '修改成功',
								icon: 'none',
								duration: 2000
							})
							this.text = '提交';
							this.loading = '';
						} else {
							uni.showToast({
								title: '修改失败',
								icon: 'none',
								duration: 2000
							})
							this.text = '提交';
							this.loading = '';
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '服务器异常',
							icon: 'none',
							duration: 2000
						})
					}
				})
			},

			init() {
				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getCompanyEdit', //仅为示例，并非真实接口地址。
					data: {
						token: token
					},
					success: (res) => {
						if (res.data.code == 200) {
							self.formdata = res.data.msg
						} else {
							uni.showToast({
								title: '网络异常',
								icon: 'none',
								duration: 2000
							})
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '服务器异常',
							icon: 'none',
							duration: 2000
						})
					}
				})
			}
		},

	}
</script>

<style>
	.top_info {
		display: flex;
	}

	.top_info text {
		color: #333333;
		font-size: 28upx;
	}

	.line {
		width: 15upx;
		height: 40upx;
		background: #007AFF;
		margin-right: 20upx;
	}
</style>

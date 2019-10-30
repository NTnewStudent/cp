<template>
	<view class="controller bg-white" style="height: 100vh;">

		<view class="top_info">

			<view class="line">
			</view>

			<text>采购信息</text>

		</view>

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->

		<view class="parameter_desc">
			<text class="parameter_desca-start">项目名称：</text>
			<text class="parameter_desca-end">{{bean.info_title}}</text>
		</view>

		<view class="parameter_desc">
			<text class="parameter_desca-start">项目地址：</text>
			<text class="parameter_desca-end">{{bean.fposition}}</text>
		</view>

		<view class="parameter_desc">
			<text class="parameter_desca-start">预算资金：</text>
			<text class="parameter_desca-end">{{bean.abmoney}}</text>
		</view>


		<view class="parameter_desc">
			<text class="parameter_desca-start">招聘人数：</text>
			<text class="parameter_desca-end">{{bean.invite_number}}</text>
		</view>

		<view class="parameter_desc">
			<text class="parameter_desca-start">项目结算方式：</text>
			<text class="parameter_desca-end">{{bean.jstype}}</text>
		</view>

		<view class="parameter_explain">
			<text class="parameter_explain-start">其他说明：</text>
			<text class="parameter_desca-end">{{bean.other_content}}</text>
		</view>

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->

		<view class="top_info margin-top">

			<view class="line">
			</view>

			<text>发布人信息</text>

		</view>

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->

		<view class="parameter_desc">
			<text class="parameter_desca-start">公司名称：</text>
			<text class="parameter_desca-end">{{bean.cname}}</text>
		</view>

		<view class="need margin-top-lm">
			<view class="parameter_desc">
				<text class="parameter_desca-start">姓名：</text>
				<text class="parameter_desca-end">{{bean.contact_name}}</text>
			</view>

			<view class="parameter_desc " style="padding-left: 135upx;">
				<text class="parameter_desca-start">职位：</text>
				<text class="parameter_desca-end">{{bean.jobs}}</text>
			</view>
		</view>

		<!-- 报名信息 -->
		<view class="top_info margin-top">
			<view class="line">
			</view>
			<text>报名信息</text>
		</view>


		<!--  -->

		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->
		<view class="parameter_explain">
			<text class="parameter_explain-start">项目介绍：</text>
			<text class="parameter_desca-end">{{bean.info_content}}</text>
		</view>
		<!-- 除开底部高度 -->
		<view class="flex_b bg-white">

		</view>
		<!-- 分割线 -->
		<view class="division_line">

		</view>
		<!-- end -->


		<!-- foot -->
		<view class="foot justify-between margin-top-sm" style="position: fixed;">

			<a class=" cu-btn block bg-blue  lg" style="width: 100%;margin-right: 20upx;" :href="bean.url_file">
				<text class="cuIcon-phone"></text>
				<text style="padding-left: 10upx;">下载材料需求文件</text>
			</a>

			<button class="cu-btn block lines-blue lg" style="width: 100%;margin-right: 6%;">
				<text class="cuIcon-upload"></text>
				<text style="padding-left: 10upx;" @click="upload">投标提交报价</text>
			</button>
		</view>
		<!-- end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				formdata: {
					id: ''
				},
				bean: {}
			}
		},
		methods: {
			showTip(){
				uni.showModal({
					content:'操作流程：下载材料需求文档，填写物品报价，点击投标提交报价上传填写好的报价表。'+
					'等待招标商联系。\n\n告知：凡是在本平台交易成功收取百分之一的技术咨询服务费。'
				})
			},
			down(e) {
				console.log(e)
			},
			downlaod(url) {
				uni.showLoading({
					title: '下载中...',
					mask: true
				})
				uni.downloadFile({
					url: url,
					success: (res) => {
						console.log(res)
						if (res.statusCode === 200) {
							uni.showToast({
								duration: 2000,
								title: '下载成功',
							})
							console.log(res)
							uni.openDocument({
								filePath: res.tempFilePath,
								success: function(res) {
									console.log('打开文档成功');
								},
								fail:function(e) {
									console.log(e)
								}
							});
						}
					},
					fail: (error) => {
						uni.showToast({
							duration: 2000,
							title: '下载失败'
						})
					},
					complete: () => {
						uni.hideLoading()
					}
				})
			},
			upload() {
				uni.navigateTo({
					url:"/pages/search/uploadform/uploadform"
				})
			},
			init(param) {
				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getByIdForm',
					method: 'get',
					data: {
						token: token,
						id: param
					},
					success: (res) => {
						if (res.data.code == 200) {
							self.bean = res.data.msg
							console.log(res);
						} else {
							uni.showToast({
								title: '加载失败',
								icon: 'none',
								duration: 2000
							})
						}
					},
					fail: (error) => {
						uni.showToast({
							title: '加载失败',
							icon: 'none',
							duration: 2000
						})
					}
				})
			}
		},
		onLoad(option) {
			console.log(option)
			this.init(option.id)
			this.formdata.id = option.id
			this.showTip()
		}
	}
</script>

<style>
	.controller {
		padding: 20upx;
	}

	.line {
		width: 15upx;
		height: 40upx;
		background: #007AFF;
		margin-right: 20upx;
	}

	.top_info {
		display: flex;
	}

	.top_info text {
		color: #333333;
		font-size: 28upx;
	}

	.division_line {
		border: 1upx #AAAAAA solid;
		margin-top: 20upx;
	}

	.parameter_desc {
		margin-top: 15upx;
	}

	.parameter_desca-start {
		color: #333333;
	}

	.parameter_desca-end {
		color: #AAAAAA;
		font-size: 25upx;
	}

	.parameter_explain {
		display: flex;
	}

	.parameter_explain-start {
		width: 42%;
	}

	.need {
		display: flex;
	}

	.foot {
		display: flex;
		position: fixed;
		bottom: 20upx;
		z-index: 999;
		width: 100%;
	}

	.flex_b {
		display: flex;
		height: 100upx;
	}
</style>

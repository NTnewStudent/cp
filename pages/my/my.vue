<template>
	<view>
		<view class="items bg-white cu-list menu magrin-top-lg ">

			<view class="cu-item arrow " @click="openLogin">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey">登录</text>
				</view>
			</view>


			<view class="cu-item arrow " @click="openInfo">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey">我的信息</text>
				</view>
			</view>

			<view class="cu-item arrow " @click="myAuth">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey">我的认证</text>
				</view>
			</view>

			<view class="cu-item arrow items_margin" @click="companyEdit">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey">公司编辑</text>
				</view>
			</view>

			<view class="cu-item arrow items_margin" @click="GoodsManagement">
				<view class="content">
					<text class="cuIcon-emojiflashfill text-pink"></text>
					<text class="text-grey">产品管理</text>
				</view>
			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			openLogin: function() {
				console.log(this.checkLogin())
				if (this.checkLogin() == true) {
					uni.showToast({
						title: '你已经登陆!',
						duration: 2000
					})

				} else {
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}

			},
			// 跳转我的认证
			myAuth: function() {
				if (this.checkLogin()) {
					uni.navigateTo({
						url: '/pages/my/my_auth/my_auth'
					})
				} else {
					uni.showToast({
						title: '请登陆!',
						duration: 2000
					})
				}

			},
			openInfo: function() {
				if (this.checkLogin()) {
					uni.navigateTo({
						url: '/pages/my/my_info/my_info'
					})
				} else {
					uni.showToast({
						title: '请登陆!',
						duration: 2000
					})
				}

			},

			// 跳转编辑页面
			companyEdit: function() {
				if (this.checkLogin()) {
					uni.navigateTo({
						url: "/pages/my/company_edit/company_edit"
					})
				} else {
					uni.showToast({
						title: '请登陆!',
						duration: 2000
					})
				}
			},
			GoodsManagement: function() {
				if (this.checkLogin()) {
					uni.navigateTo({
						url: "/pages/my/goods_management/goods_management"
					})
				} else {
					uni.showToast({
						title: '请登陆!',
						duration: 2000
					})
				}

			},

			// 显示二维码
			showQR: function() {

			}

		}
	}
</script>

<style>
	/* top */
	.top_name {
		width: 70%;
		padding-top: 10upx;
		margin-left: 20upx;
	}

	.top {
		display: flex;
	}

	.top_image image {
		height: 100upx;
		width: 100upx;
	}

	.top_qr image {
		height: 50upx;
		width: 50upx;
	}

	.top_qr {
		padding-top: 30upx;
	}

	/* end */

	/* san_bu */

	.san_bu {
		margin-top: 2upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 25upx;
		padding-bottom: 25upx;
		padding-left: 50upx;
		padding-right: 50upx;
	}

	.san_bu_left_image image {
		height: 80upx;
		width: 80upx;
		border-radius: 10upx;
	}

	.san_bu_left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	/* end */


	/* 选项条 */
	.items {
		margin-top: 10upx;
	}

	.items_margin {
		margin-top: 2upx;
	}

	/* end */

	.magrin-top-lg {
		margin-top: 20upx;
	}
</style>

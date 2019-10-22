<template>
	<view>
		<!-- 头部 -->
		<view class="top padding bg-white">
			<view class="top_image">
				<image src="../../static/logo.png" mode=""></image>
			</view>

			<view class="top_name ">

				<view class="top_name_top">
					学点
				</view>

				<view class="top_name_boutton">
					暂无职位信息
				</view>
			</view>

			<view class="top_qr" @click="showQR">
				<image src="../../static/qrCode.png" mode=""></image>
			</view>

		</view>

		<!-- end -->


		<!-- 3居中布局 -->


		<view class="san_bu  bg-white">

			<view class="san_bu_left">

				<view class="san_bu_left_image">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<text>会员中心</text>

			</view>

			<view class="san_bu_left">

				<view class="san_bu_left_image">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<text>会员中心</text>

			</view>

			<view class="san_bu_left">

				<view class="san_bu_left_image">
					<image src="../../static/logo.png" mode=""></image>
				</view>
				<text>会员中心</text>
			</view>
		</view>



		<view class="items bg-white cu-list menu magrin-top-lg ">

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
				// 跳转我的认证
				myAuth:function(){
					uni.navigateTo({
						url:'/pages/my/my_auth/my_auth'
					})
				},
				
				// 跳转编辑页面
				companyEdit:function(){
					uni.navigateTo({
						url:"/pages/my/company_edit/company_edit"
					})
				},
				GoodsManagement:function(){
					uni.navigateTo({
						url:"/pages/my/goods_management/goods_management"
					})
				},
				
				// 显示二维码
				showQR:function(){
					
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

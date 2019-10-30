<template>
	<view class="bg-white" style="height: 95vh;">

		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 产品列表
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in datalist" :key="index"
				 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view>
					<view class="content">
						<view class="text-grey">{{item.goods_name}}</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text> {{item.goods_desc}}</view>
					</view>
					<view class="action">
						<text class="text-price text-red">{{item.price}}</text>
					</view>
					<view class="move">
						<view class="bg-grey" @click="openEdit(item.id)">编辑</view>
						<view class="bg-red" @click="deleteIteam(item.id)">删除</view>
					</view>
				</view>
			</view>

		</scroll-view>

		<view>
			<button @click="openPage" class="abs-button cu-btn bg-red round lg shadow " style="font-size: 18upx;border-radius: 50%;padding: 12upx 18upx;">添加</button>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				datalist: []
			}
		},
		onLoad() {
			this.init()
		},
		methods: {

			openPage(e) {
				uni.navigateTo({
					url: '/pages/my/goods_add/goods_add'
				})
			},
			openEdit(e) {
				uni.navigateTo({
					url: '/pages/my/goods_edit/goods_edit?id=' + e
				})
			},
			deleteIteam(ids) {
				var that = this 
				uni.showModal({
					content: "是否删除！",
					success: function(e) {
						console.log(e)
						if (e.confirm) {
							that.delete(ids)
						}
					},
					fail: function(e) {
						console.log('fail')
					}
				})
			},

			// ListTouch触摸开始
			ListTouchStart(e) {
				this.listTouchStart = e.touches[0].pageX
			},

			// ListTouch计算方向
			ListTouchMove(e) {
				this.listTouchDirection = e.touches[0].pageX - this.listTouchStart > 0 ? 'right' : 'left'
			},

			// ListTouch计算滚动
			ListTouchEnd(e) {
				if (this.listTouchDirection == 'left') {
					this.modalName = e.currentTarget.dataset.target
					console.log(this.modalName)
				} else {
					this.modalName = null
				}
				this.listTouchDirection = null
			},
			delete(id) {
				var token = uni.getStorageSync("token")
				var self = this
				console.log('id:'+id)
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/deleteGoods', //仅为示例，并非真实接口地址。
					data: {
						token: token,
						id:id
					},
					method:'POST',
					success: (res) => {
						console.log(res)
						if (res.data.code == 200) {
							self.init()
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
			},
			//初始化页面
			init() {
				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getProductList', //仅为示例，并非真实接口地址。
					data: {
						token: token
					},
					success: (res) => {
						console.log(res)
						if (res.data.code == 200) {
							self.datalist = res.data.msg
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
		}
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

	.abs-button {
		position: absolute;
		bottom: 10%;
		right: 10%;
	}
</style>

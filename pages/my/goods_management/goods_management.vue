<template>
	<view class="bg-white" style="height: 95vh;">

		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">

			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 产品列表
				</view>
			</view>
			<view class="cu-list menu-avatar">
				<view class="cu-item" :class="modalName=='move-box-'+ index?'move-cur':''" v-for="(item,index) in 4" :key="index"
				 @touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" :data-target="'move-box-' + index">
					<view class="cu-avatar round lg" :style="[{backgroundImage:'url(https://ossweb-img.qq.com/images/lol/web201310/skin/big2100'+ (index+2) +'.jpg)'}]"></view>
					<view class="content">
						<view class="text-grey">商品名称</view>
						<view class="text-gray text-sm">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text> 商品描述</view>
					</view>
					<view class="action">
							<text class="text-price text-red">80.00</text>
					</view>
					<view class="move">
						<view class="bg-grey" @click="openEdit">编辑</view>
						<view class="bg-red">删除</view>
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
			}
		},
		methods: {
			
			openPage(e){
				uni.navigateTo({
					url:'/pages/my/goods_add/goods_add'
				})
			},
			openEdit(e){
				uni.navigateTo({
					url:'/pages/my/goods_edit/goods_edit'
				})
			},
			deleteIteam(e){
				
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
	.abs-button{
		position:  absolute;
		bottom: 10%;
		right: 10%;
	}
</style>

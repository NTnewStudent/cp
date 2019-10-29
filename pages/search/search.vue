<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">

			<view class="cu-card case" @click="toTargetDesc(item.id)" v-for=" (item,index) in dataList" :key="index" data-id="item.id">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item" style="height: 200rpx;">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-grey ">{{item.cname}}</view>
								<view class="text-gray text-sm flex justify-between ">
									项目地址:{{item.fposition}}
									<view class="text-gray text-sm ">
										<text class="cuIcon-attentionfill" style="position: absolute;bottom: 0;right: 0;">发布日期:{{item.CREATE_TIME}}</text>
									</view>
								</view>
								<view class="text-gray text-sm ">招聘人数:{{item.invite_number}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				dataList: ''

			}
		},
		onLoad(option) {
			this.init()
		},
		methods: {
			// 调转采购详细
			toTargetDesc(id) {
				console.log(id)
				uni.navigateTo({
					url: "/pages/search/serchList/serchList?id="+id
				})
			},
			init() {
				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getAllForm', //仅为示例，并非真实接口地址。
					data: {
						token: token
					},
					success: (res) => {
						if (res.data.code == 200) {
							self.dataList = res.data.msg
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
		}
	}
</script>

<style>
	.page {
		height: 100Vh;
		width: 100vw;
	}

	.page.show {
		overflow: hidden;
	}

	.switch-sex::after {
		content: "\e716";
	}

	.switch-sex::before {
		content: "\e7a9";
	}

	.switch-music::after {
		content: "\e66a";
	}

	.switch-music::before {
		content: "\e6db";
	}
</style>

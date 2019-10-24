<template>
	<view>
		<scroll-view :scroll-y="modalName==null" class="page" :class="modalName!=null?'show':''">

			<view class="cu-card case" @click="toTargetDesc()">
				<view class="cu-item shadow">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view class="text-grey">公司名称</view>
								<view class="text-gray text-sm flex justify-between">
									项目地址
									<view class="text-gray text-sm">
										<text class="cuIcon-attentionfill margin-lr-xs"></text> 发布日期
									</view>
								</view>
								<view class="text-gray text-sm">招聘范围</view>
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

			}
		},
		methods: {
			// 调转采购详细
			toTargetDesc() {
				uni.navigateTo({
					url: "/pages/search/serchList/serchList"
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

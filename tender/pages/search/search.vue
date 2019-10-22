<template>
	<view>
		<!-- 搜索 -->
		<view class="search-form">

		</view>

		<!-- 背景文字 -->
		<view class="search_text">
			<text>发现更多商机</text>
		</view>
		<!-- end -->

		<!-- 搜索框 -->

		<view class="search_input padding">

			<view class="search_input_image bg-white">
				<image src="../../static/s1.png" mode=""></image>
			</view>

			<view class="bg-white search_input_centent">
				请输入产品、行业或项目名称
			</view>


		</view>

		<!-- end -->

		<!-- end -->

		<!-- 内容块 -->
		<view class="controller bg-white">

			<!-- 3布局 -->
			<view class="san_bus padding">

				<view class="sna_bus_left">

					<view class="sna_bus_left_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="sna_bus_text">搜 招 标</text>

				</view>

				<view class="sna_bus_left">

					<view class="sna_bus_left_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="sna_bus_text">搜 招 标</text>

				</view>

				<view class="sna_bus_left">

					<view class="sna_bus_left_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="sna_bus_text">搜 招 标</text>

				</view>

			</view>
			<!-- end -->


			<!-- 找采购 供应商 企业 业主 -->

			<view class="target bg-white padding">

				<!-- 采购  -->
				<view class="target_procurement margin-left-sm">
					<view class="target_procurement_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
				<!-- end -->

				<!-- 供应商 -->
				<view class="target_procurement margin-left-xl">
					<view class="target_procurement_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找供应商</text>
					<text class="target_procurement_text_boutton">高效询价比价</text>
				</view>
				<!-- end -->

				<!-- 企业 -->
				<view class="target_procurement margin-left-sm margin-top-sm">
					<view class="target_procurement_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找企业</text>
					<text class="target_procurement_text_boutton">查询甲方 行业动态</text>
				</view>
				<!-- end -->

				<!-- 业主 -->
				<view class="target_procurement margin-left-xl margin-top-sm ">
					<view class="target_procurement_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找业主</text>
					<text class="target_procurement_text_boutton">直接对接负责人</text>
				</view>
				<!-- end -->

			</view>

			<!-- end -->

		</view>
		<!-- end -->

		<!-- 轮播图 -->
		<swiper class="screen-swipers square-dot" :indicator-dots="true" :circular="true" :autoplay="true" interval="5000"
		 duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index">
				<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
				<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
			</swiper-item>
		</swiper>

		<!-- end -->

	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
			}
		},
		methods: {

		}
	}
</script>

<style>
	.screen-swipers {
		width: 100%;
		height: 100upx;
	}

	.screen-swipers image {
		width: 100%;
	}

	.search-form {
		background: #007AFF;
		width: 100%;
		height: 300upx;
	}

	.search_input {
		display: flex;
		align-items: center;
		position: absolute;
		top: 140upx;
		width: 100%;
	}

	.search_input_image image {
		height: 50upx;
		width: 50upx;
	}

	.search_input_image {
		padding: 12upx;
		display: flex;
		align-items: center;
		border-top-left-radius: 10upx;
		border-bottom-left-radius: 10upx;
	}

	.search_input_centent {
		padding: 18upx;
		width: 100%;
		border-top-right-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.search_text text {
		font-size: 40upx;
		color: #E7EBED;
		position: absolute;
		top: 70upx;
		margin-left: 35%;
	}

	.controller {
		border-top-left-radius: 20upx;
		border-top-right-radius: 20upx;
		width: 100%;

	}

	.sna_bus_left_image image {
		height: 80upx;
		width: 80upx;
	}

	.sna_bus_left {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.san_bus {
		display: flex;
		justify-content: space-around;
	}

	.sna_bus_text {
		color: #333333;
		font-size: 30upx;
		font-weight: 550;
	}

	.target_procurement {
		background: #F5F5F5;
		height: 220upx;
		width: 300upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.target {
		display: flex;
		flex-wrap: wrap;
	}

	.target_procurement_image {
		padding-bottom: 10upx;
	}

	.target_procurement_image image {
		height: 70upx;
		width: 70upx;
	}

	.target_procurement_text {
		color: #333333;
		font-size: 25upx;
	}

	.target_procurement_text_boutton {
		color: #CCCCCC;
		font-size: 26upx;
	}
</style>

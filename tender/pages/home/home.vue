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
			<!--
			<view class="search_input_image bg-white">
				<image src="../../static/s1.png" mode=""></image>
			</view>
-->

			<view style="width: 100%; margin: auto;margin-bottom: 20px;">
				<xfl-select :list="list" :clearable="false" :showItemNum="5" :listShow="false" :style_Container="listBoxStyle"
				 :selectHideType="'independent'">
				</xfl-select>
			</view>


		</view>

		<!-- end -->

		<!-- end -->

		<!-- 内容块 -->
		<view class="controller bg-white">

			<!-- 3布局 -->
			<view class="san_bus padding solid-bottom ">

				<view class="sna_bus_left ">

					<view class="sna_bus_left_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="sna_bus_text">搜 店 名</text>

				</view>

				<view class="sna_bus_left ">

					<view class="sna_bus_left_image">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="sna_bus_text">搜 材 料</text>

				</view>

			</view>
			<!-- end -->


			<!-- 找采购 供应商 企业 业主 -->

			<view class="target bg-white maring-w ">

				<!-- 采购  -->
				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
					<view class="solid-bottom"></view>
				</view> 
				<!-- end -->

				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
				
				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
				
				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
				
				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
				
				<view class="target_procurement margin-left-sm solid-bottom">
					<view class="target_procurement_image mohuposition">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					<text class="target_procurement_text">找采购</text>
					<text class="target_procurement_text_boutton">直采项目 无须投标</text>
				</view>
			</view>

			<!-- end -->

		</view>
		<!-- end -->



	</view>
</template>

<script>
	import xflSelect from '../../components/xfl-select/xfl-select.vue';
	export default {
		data() {
			return {
				/* 下拉列表使用的组件属性 start */
				listBoxStyle: `height: 40px; font-size: 16px;`,
				list: [
					'苹果',
					{
						value: '香蕉',
						disabled: true
					},
					'葡萄',
					'芒果',
					'大白菜',
				],
				/* 下拉列表 end */

			}
		},
		methods: {

		},
		components: {
			xflSelect
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
		width: 95%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 12upx;
	}
	.target_procurement:last-child{
		margin-bottom: 12upx;
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

	.maring-w {
		margin: 12upx 12upx;
	}
</style>

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
				<xfl-select :list="list" @change="inpu_chage"  :clearable="false"  :listShow="false" :style_Container="listBoxStyle"
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


			<!-- 找采购 供应商 企业 业主  先生-->
			
			<view @tap="toHomeDesc" :data-desc ="item.info_desc" :data-business="item.company_name" class="bg-white padding-bottom " v-for="(item,index) in homeData " :key="index">
				
				<view class="company_desc">
					
					<view class="company_desc_top_left" style="width: 72%;padding-left: 20upx;">
						<image src="../../static/logo.png" mode=""></image>
					</view>
					
					<view class="company_desc_top_rigth">
						<text style="color: #333333;">{{item.CREATED_TIME}} 发布</text>
					</view>
					
					
				</view>
				
				<view class="company_name ">
					<text style="color: #333333;">{{item.company_name}}</text>
				</view>
				
				<view class="company_desc_content padding-lefts padding-top">
					<text style="color: #AAAAAA" class="padding-right">采购内容:</text>
					<text style="color: #AAAAAA"> {{item.category_name}}</text>
				</view>
				
				<view class="company_desc_content padding-lefts .padding-top-sm">
					<text style="color: #AAAAAA" class="padding-right">项目地区:</text>
					<text style="color: #AAAAAA"> {{item.company_postion}}</text>
				</view>
				
				<view class="company_rel padding-lefts padding-top-sm">
					
					<view class="company_rel_image" style="padding-right: 10upx;">
						<image src="../../static/HM-search/delete.png" mode=""></image>
					</view>
					
					<view class="company_rel_posen " style="padding-right: 50upx; " >
						<text>0 人已联系</text>
					</view>
					
						<!-- 	
					<view class="company_rel_image" style="padding-right: 10upx;">
						<image src="../../static/HM-search/delete.png" mode=""></image>
					</view>
			
					<view class="company_rel_posen">
						<text>截止时间：2019-11-19</text>
					</view> -->
					
				</view>
				
				<!-- 线条 -->
				<view class="" style="width: 85%; margin-top: 50upx;border: 0.5upx #AAAAAA solid;margin-left: 5%;">
					
				</view>
				<!-- end -->
				
				
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
					"123"
				],
				lists:[],
				/* 下拉列表 end */
				
				homeData:'',//首页数据

			}
		},
		methods: {
			toHomeDesc:function(e){
				
				var desc = e.currentTarget.dataset.desc;
				var business = e.currentTarget.dataset.business;
				
				uni.navigateTo({
					url:"/pages/home/home_desc/home_desc?desc="+desc+ "&business="+business
				})
			},
			// 获取点击的下标
			inpu_chage:function(e){
				console.log(e);
			},
			
			// 显示分类数据
			showCategory:function(){
				//
				uni.request({
				    url: 'https://www.zoba.fun/client/public/index.php/getAllCategory', //仅为示例，并非真实接口地址。
				    header: {
				        'custom-header': 'hello' //自定义请求头信息
				    },
				    success: (res) => {
						if(res.data.code == 200){
							this.lists = res.data.msg;
							
							let data = [];
							for (var i = 0; i < this.lists.length; i++) {
								data.push(this.lists[i].category_name);
							}
							this.list = data;
							
							console.log(this.list);
							
						}else{
							uni.showToast({
								title:'加载失败',
								icon:'none',
								duration:2000
							})
						}
					
				    },
					fail:(error) => {
						uni.showToast({
							title:'加载失败',
							icon:'none',
							duration:2000
						})
					}
				});
			},
			// 加载首页数据
			showHome:function(){
				uni.request({
					url:"https://www.zoba.fun/client/public/index.php/getUserByPage",
					success:res =>{
						if(res.data.code = 200){
							this.homeData = res.data.data.data;
							console.log(this.homeData);
						}
					},
					fail:error =>{
						uni.showToast({
							title:'加载失败!',
							icon:'none',
							duration:2000
						})
					}
				})
			}
		},
		components: {
			xflSelect
		},
		onLoad:function(option){
			// 显示分类数据
			this.showCategory();
			
			// 加载首页数据
			this.showHome();
			
			
		},
		onShow:function(){
			
		}
	}
</script>

<style>
	.padding-bottom{
		padding-bottom: 20upx;
	}
	.company_rel_posen text{
		color: #AAAAAA;
		font-size: 27upx;
	}
	.company_rel{
		display: flex;
		align-items: center;
	}
	.company_rel_image image{
		width: 25upx;
		height: 25upx;
	}
	.company_desc_content text{
		font-size: 27upx;
	}
	.padding-right{
		padding-right: 20upx;
	}
	.padding-lefts{
		padding-left: 20upx;
	}
	.padding-top{
		padding-top: 10upx;
	}
	.padding-top-sm{
		padding-top: 5upx;
	}
	.company_name{
		padding-top: 20upx;
		padding-left: 20upx;
	}
	.company_desc{
		display: flex;
		align-items: center;
	}
	.company_desc_top_left image{
		width: 50upx;
		height: 50upx;
	}
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

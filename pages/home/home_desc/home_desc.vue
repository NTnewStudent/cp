<template>
	<view class=" bg-white " style="height: 100vh;">
		<view class="top_info padding-lr padding-top">
		
		<view class="line">
		</view>	
		
		<text>主要业务</text>
		
		</view>
		
		<!-- 分割线 -->
		<view class="division_line">
			
		</view>
		<!-- end -->
		
		<!-- 主要业务：内容  -->
		<view class="padding-lr" style="margin-top: 20upx;">
			<text style="color: #AAAAAA;font-size: 28upx;">
				{{business}}
			</text>
		</view>
		<!-- end -->
		
		<!-- 灰色线 -->
		<view class="hotline " style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->
		
		
		<view class="top_info padding-lr padding-top">
		
		<view class="line">
		</view>	
		
		<text>公司介绍</text>
		
		</view>
		
		<!-- 分割线 -->
		<view class="division_line" >
			
		</view>
		<!-- end -->
		
		<!-- 主要业务：内容  -->
		<view class="padding-lr" style="margin-top: 20upx;">
			<text style="color: #AAAAAA;font-size: 28upx;">
				{{desc}}
			</text>
		</view>
		<!-- end -->
		
		<!-- 灰色线 -->
		<view class="hotline " style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->
		
		<view class="top_info padding-lr padding-top">
		
		<view class="line">
		</view>	
		
		<text>产品</text>
		
		</view>
		
		
		<!-- 分割线 -->
		<view class="division_line" >
			
		</view>
		<!-- end -->
		
		
		<view class="product bg-white padding" v-for="(item,index) in 10" :key="index">
			
			<view class="product_image">
				<image src="../../../static/logo.png" mode=""></image>
			</view>
			
			<view class="product_paramter padding-left">
				
				<view class="" style="font-size: 32upx;color: #333333;font-weight: 550;">
					<text>大型棒槌</text>
				</view>
				
				<view class="" style="color: #AAAAAA; font-size: 25upx;">
					<text>定制</text>
				</view>
				
				<view class="" style="margin-top: 30upx;font-size: 28upx;color: #DD514C; font-weight: 550;">
					<text>600-700——平方</text>
				</view>
				
			</view>
			
		</view>
		
		
	</view>
	
	
</template>

<style>
	.top_info{
		display: flex;
	}
	.top_info text{
		color: #333333;
		font-size: 28upx;
	}
	.line{
		width: 15upx;
		height: 40upx;
		background: #007AFF;
		margin-right: 20upx;
	}
	.division_line{
		border: 0.5upx #AAAAAA solid;
		margin-top: 20upx;
	}
	.padding-lr{
		padding-lr: 20upx;
	}
	.padding-top{
		padding-top: 20upx;
	}
	.product_image image{
		width: 150upx;
		height: 150upx;
	}
	.product{
		display: flex;
	}
</style>

<script>
	
	export default{
		data(){
			return{
				business:'',
				desc:''
			}
		},
		methods:{
			
		},
		onLoad:function(option){
			var business = option.business;
			var desc = option.desc;
			
			this.business = business;
			this.desc = option.desc;
			console.log(this.desc);
			
		},
		onShow:function(){
			
		}
	}
	
</script>
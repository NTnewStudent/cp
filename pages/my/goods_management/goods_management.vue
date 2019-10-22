<template>
	<view class="bg-white" style="height: 95vh;">
		
		<!-- 灰色线 -->
		<view class="hotline " style="background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->
		
		<view class="top_info padding-lr padding-top ">
		
		<view class="line">
		</view>	
		
		<text>主要业务</text>
		
		</view>
		
		<!-- 编辑 主要业务-->
		<view class="cu-form-group margin-top ">
			<textarea maxlength="-1" v-model="textareaAValue" :disabled="modalName!=null"   placeholder="请修改内容"></textarea>
		</view>
		
		
		<!-- 灰色线 -->
		<view class="hotline " style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->
		
		<view class="top_info padding-lr padding-top">
		
		<view class="line">
		</view>	
		
		<text>公司介绍</text>
		
		</view>
		<!-- 编辑 主要业务 -->
		<view class="cu-form-group margin-top">
			<textarea maxlength="-1" v-model="textareaBValue" :disabled="modalName!=null"  placeholder="请修改内容"></textarea>
		</view>
		
		<!-- 灰色线 -->
		<view class="hotline" style="margin-top: 20upx;background: rgb(241,241,241);height: 20upx;">
		</view>
		<!-- end -->
		
		<!-- 上传 -->
		<view class="" style="width: 90%;margin-left: 5%;height: 100upx;">
			<button class="cu-btn block bg-blue margin-tb-sm lg" @tap="send">
				<text class=" cuIconfont-spin" :class=" loading "></text> {{text}}
				</button>
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
			
		}
	}
</script>

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
</style>

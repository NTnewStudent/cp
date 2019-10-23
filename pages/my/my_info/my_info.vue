<template>
	<view>
		<view class="bg-white" style="height: 95vh;">


			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 我的信息
				</view>
			</view>

			<form>
				<view class="cu-form-group">
					<view class="title">联系号码</view>
					<input placeholder="联系号码" name="input" type="number"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">公司地址</view>
					<input placeholder="公司地址" name="input" type="number"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">姓名</view>
					<input placeholder="姓名" name="input" type="text"></input>
				</view>
				
				
				
				
				<view class="" style="width: 90%;margin-left: 5%;">
					<button class="cu-btn block bg-blue margin-tb-sm lg" @tap="send_image">
						<text class=" cuIconfont-spin" :class=" loading "></text> {{text}}
					</button>
				</view>

			</form>



		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				text: '提交', //文字提示,
				loading: '', //图片加载状态 cuIcon-loading2
			}
		},
		methods: {
			textareaBValue(e) {
				this.formdata.textareaBValue = e.detail.value
			},
			//发送图片
			send_image: function() {
				//修改状态
				this.text = '上传中...';
				this.loading = 'cuIcon-loading2';

				// 模拟发送
				setTimeout(() => {
					this.text = '修改';
					this.loading = '';

				}, 3000);

			}

		}
	}
</script>

<style>

</style>

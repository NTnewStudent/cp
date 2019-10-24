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
					<input placeholder="联系号码" name="input" type="number" v-model="formdata.phone"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">座机号码</view>
					<input placeholder="座机号码" name="input" type="number" v-model="formdata.home_phone"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">公司地址</view>
					<input placeholder="公司地址" name="input" type="text" v-model="formdata.company_postion"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">姓名</view>
					<input placeholder="姓名" name="input" type="text" v-model="formdata.contact_name"></input>
				</view>


				<view class="" style="width: 90%;margin-left: 5%;">
					<button class="cu-btn block bg-blue margin-tb-sm lg" @tap="submit">
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
				formdata: {
					phone: '',
					home_phone: '',
					company_postion: '',
					contact_name: ''
				}
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

			},
			//提交修改
			submit(){
					var token = uni.getStorageSync("token")
					var self = this 
					if (token == '')
						token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"
						
					this.formdata.token = token	
				
					uni.request({
						url: 'https://www.zoba.fun/client/public/index.php/UserInfoRedact', //仅为示例，并非真实接口地址。
						method:'POST',
						data: this.formdata,
						success: (res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: '修改成功',
									icon: 'none',
									duration: 2000
								})
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
				
			},
			//初始化页面
			init() {
				var token = uni.getStorageSync("token")
				var self = this 
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getUserInfo', //仅为示例，并非真实接口地址。
					data: {
						token: token
					},
					success: (res) => {
						if (res.data.code == 200) {
							self.formdata = res.data.msg
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
		},
		onLoad: function(e) {

		},
		onShow() {
			this.init()
		}
	}
</script>

<style>

</style>

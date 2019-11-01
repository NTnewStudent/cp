<template>
	<view>
		<view class="bg-white" style="height: 95vh;">


			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 投标
				</view>
			</view>

			<form>
				<view class="cu-form-group">
					<view class="title">联系号码</view>
					<input placeholder="联系号码" name="input" type="number" v-model="postdata.mobile"></input>
				</view>
				
				<fileUpload :uploadfileUrl="url" :formdata="uploadstatus"></fileUpload>

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
	import fileUpload from '../../../components/xiaoshaoxin-fileUploader/fileUploader'
	export default {
		components:{
			fileUpload
		},
		data() {
			return {
				modalName: null,
				text: '提交', //文字提示,
				loading: '', //图片加载状态 cuIcon-loading2
				phone:'',
				url:'https://www.zoba.fun/service/public/index.php/api/index/upload',
				postdata:{
					mobile:'',
					token:'',
					form_id:'',
					url_file:''
				},
				uploadstatus:''
			}
		},
		methods: {
			//提交修改
			submit(){
					var token = uni.getStorageSync("token")
					var self = this 
					if (token == '')
						token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"
					
					console.log(this.formdata)	
					this.postdata.token = token	
				
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
		}
	}
</script>

<style>

</style>

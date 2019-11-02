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
				
				<view class="cu-form-group">
					<view class="title">总报价</view>
					<input placeholder="总报价" name="totalmoney" type="number" v-model="postdata.totalmoney"></input>
				</view>
				
				<fileUpload :uploadfileUrl="url" :formdata="uploadstatus" @uploadResult="getUploadResult"></fileUpload>

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
				url:'https://www.zoba.fun/service/public/index.php/api/common/upload',
				postdata:{
					mobile:'',
					token:'',
					form_id:'',
					url_file:'',
					totalmoney:''
				},
				uploadstatus:'',
				id:''
			}
		},
		methods: {
			getUploadResult(data){
				console.log(data)
				this.uploadstatus = data
				let test = JSON.parse(this.uploadstatus)
				if(test.code == 400){
					uni.showToast({
						title:test.msg,
						duration:2000,
						icon:'none'
					})
				}
			},
			//提交修改
			submit(){
					var token = uni.getStorageSync("token")
					var self = this 
					if (token == '')
						token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"
					let	fileName = JSON.parse(this.uploadstatus).data
					if(this.uploadstatus.code == 400){
						uni.showToast({
							title:'文件上传失败'
						})
						return
					}
					console.log(fileName)
					this.postdata.token = token
					this.postdata.form_id = this.id 
					this.postdata.url_file = fileName.url
					
					uni.request({
						url: 'https://www.zoba.fun/client/public/index.php/addUserForm', //仅为示例，并非真实接口地址。
						method:'POST',
						data: this.postdata,
						success: (res) => {
							if (res.data.code == 200) {
								uni.showToast({
									title: res.data.msg,
									icon: 'none',
									duration: 2000
								})
							} else {
								uni.showToast({
									title: res.data.msg,
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
						},
						complete() {
							setTimeout(function(){
								uni.navigateBack({
									url:"/pages/search/serchList/serchList?id="+this.id
								})
							},3000)
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
			this.id = e.id
			console.log(e.id)
		},
		onShow() {
		}
	}
</script>

<style>

</style>

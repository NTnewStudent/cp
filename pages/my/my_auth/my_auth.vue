<template>
	<view style="height: 100vh;" class="bg-white">
		<view class="cu-bar bg-white margin-top">
			<view class="action">
				营业执照副本上传
			</view>
			<view class="action">
				{{imgList.length}}/1
			</view>
		</view>

		<view class="cu-form-group">
			<view class="grid col-4 grid-square flex-sub">
				<view class="bg-img" v-for="(item,index) in imgList" :key="index" @tap="ViewImage" :data-url="imgList[index]">
					<image :src="imgList[index]" mode="aspectFill"></image>
					<view class="cu-tag bg-red" @tap.stop="DelImg" :data-index="index">
						<text class='cuIcon-close'></text>
					</view>
				</view>
				<view class="solids" @tap="ChooseImage" v-if="imgList.length<1">
					<text class='cuIcon-cameraadd'></text>
				</view>
			</view>
		</view>

		<view class="" style="width: 90%;margin-left: 5%;">
			<button class="cu-btn block bg-blue margin-tb-sm lg" @tap="send_image">
				<text class=" cuIconfont-spin" :class=" loading "></text> {{text}}
			</button>
		</view>



	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList: [], //图片
				loading: '', //图片加载状态 cuIcon-loading2
				text: '上传', //文字提示
				tempFile: '',
				fileObj: ''
			}
		},
		onLoad() {
			this.init()
		},
		onShow() {

		},
		methods: {

			// 图片 
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {

						this.fileObj = res.tempFiles[0]
						console.log(this.fileObj)
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)

						} else {
							this.imgList = res.tempFilePaths
						}
						//	this.imgList.pop()
						//	this.imgList.push(res.tempFilePaths)
					}
				});
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.imgList,
					current: e.currentTarget.dataset.url
				});
			},
			DelImg(e) {
				uni.showModal({
					title: '提示',
					content: '确定要删除这张图片吗？',
					cancelText: '再看看',
					confirmText: '删除',
					success: res => {
						if (res.confirm) {
							this.imgList.splice(e.currentTarget.dataset.index, 1)
						}
					}
				})
			},
			// end

			//发送图片
			send_image: function() {
				//修改状态
				this.text = '上传中...';
				this.loading = 'cuIcon-loading2';

				var token = uni.getStorageSync("token")
				
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				if (this.tempFile == this.imgList)
					this.showFail()

				var formdata = {
					token: token,
					file: this.fileObj
				}

				console.log(formdata)

				uni.uploadFile({
					url: 'https://www.zoba.fun/client/public/index.php/uploadImage', //仅为示例，并非真实接口地址。
					filePath: this.imgList[0],
					name: 'file',
					formData: {
						'token': token
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
						uni.showToast({
							title: '修改成功',
							icon: 'none',
							duration: 2000
						})
						self.text = '上传';
						self.loading = '';
					},
					fail: (error) => {
						console.log(error)
						uni.showToast({
							title: '加载失败',
							icon: 'none',
							duration: 2000
						})
						self.text = '上传';
						self.loading = '';
					}


			})

	},
	showFail() {
			uni.showToast({
				title: '更新失败',
				icon: 'none',
				duration: 2000
			})
		},
		//初始化页面
		init() {
			var token = uni.getStorageSync("token")
			var self = this
			if (token == '')
				token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

			uni.request({
				url: 'https://www.zoba.fun/client/public/index.php/getUserSocialCodeImage', //仅为示例，并非真实接口地址。
				data: {
					token: token
				},
				success: (res) => {
					if (res.data.code == 200) {
						self.imgList.push(res.data.msg)
						self.tempFile = self.imgList[0]
					} else {
						uni.showToast({
							title: '网络异常',
							icon: 'none',
							duration: 2000
						})
					}
				},
				fail: (error) => {
					uni.showToast({
						title: '服务器异常',
						icon: 'none',
						duration: 2000
					})
				}
			})
		}

	}
	}
</script>

<style>

</style>

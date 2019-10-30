<template>
	<view>
		<view class="bg-white" style="height: 95vh;">


			<view class="cu-bar bg-white solid-bottom margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 添加商品
				</view>
			</view>

			<form>
				<view class="cu-form-group">
					<view class="title">商品名称</view>
					<input placeholder="商品名称" name="input" v-model="goods_name"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">产品价格</view>
					<input placeholder="产品价格" name="input" type="digit" v-model="price"></input>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">商品描述</view>
					<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBValue" placeholder="多行文本输入框" v-model="goods_desc"></textarea>
				</view>

				<!--上传图片-->
				<view class="cu-bar bg-white margin-top">
					<view class="action">
						产品图片
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
				<!--end-->
			</form>



		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				formdata: {
					textareaBValue: '',
					imgList: [], //图片
				},
				imgList: [], //图片
				loading: '', //图片加载状态 cuIcon-loading2
				text: '提交', //文字提示
				price: '',
				goods_desc: '',
				goods_name: '',
				id: '',
				temp: ''
			}
		},
		onLoad(e) {
			this.id = e.id
			this.init()
		},
		methods: {
			init() {
				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"

				uni.request({
					url: 'https://www.zoba.fun/client/public/index.php/getByIdGoods', //仅为示例，并非真实接口地址。
					data: {
						token: token,
						id: this.id
					},
					success: (res) => {
						if (res.data.code == 200) {
							console.log(res)
							self.goods_desc = res.data.msg.goods_desc
							self.goods_name = res.data.msg.goods_name
							self.price = res.data.msg.price
							self.imgList.push(res.data.msg.img_url)
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
			},

			textareaBValue(e) {
				this.formdata.textareaBValue = e.detail.value
			},
			// 图片
			ChooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						if (this.imgList.length != 0) {
							this.imgList = this.imgList.concat(res.tempFilePaths)
						} else {
							this.imgList = res.tempFilePaths
						}
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
			showFail() {
				uni.showToast({
					title: '更新失败',
					icon: 'none',
					duration: 2000
				})
			},

			//发送图片
			send_image: function() {
				//修改状态
				this.text = '上传中...';
				this.loading = 'cuIcon-loading2';

				var token = uni.getStorageSync("token")
				var self = this
				if (token == '')
					token = "$2y$10$vKopYEBwV3yG9eRTuoMI5u1DmPinK2biTtKvZHP2QArC8bLi3LjTy"


				var formdata = {
					token: token,
					file: this.fileObj
				}

				console.log(formdata)
				var that = this
				uni.uploadFile({
					url: 'https://www.zoba.fun/client/public/index.php/editGoods', //仅为示例，并非真实接口地址。
					filePath: this.imgList[0],
					name: 'file',
					formData: {
						'token': token,
						'id':that.id,
						'goods_name': that.goods_name,
						'goods_desc': that.goods_desc,
						'price': that.price
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
							title: '修改失败',
							icon: 'none',
							duration: 2000
						})
						self.text = '上传';
						self.loading = '';
					},
					complete() {
						that.goods_desc = ''
						that.goods_name = ''
						that.price = ''
						that.imgList.pop()
						
						self.init()
					}


				})

			}
		}
	}
</script>

<style>

</style>

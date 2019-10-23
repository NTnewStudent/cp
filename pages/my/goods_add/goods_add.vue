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
					<input placeholder="商品名称" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">产品价格</view>
					<input placeholder="产品价格" name="input" type="digit"></input>
				</view>
				<view class="cu-form-group align-start">
					<view class="title">商品描述</view>
					<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaBValue" placeholder="多行文本输入框"></textarea>
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
						<view class="solids" @tap="ChooseImage" v-if="imgList.length<=1">
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
				loading:'',//图片加载状态 cuIcon-loading2
				text:'提交',//文字提示
			}
		},
		methods: {
			textareaBValue(e) {
				this.formdata.textareaBValue = e.detail.value
			},
			// 图片
			ChooseImage() {
				uni.chooseImage({
					count: 2, //默认9
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


			//发送图片
			send_image: function() {
				//修改状态
				this.text = '上传中...';
				this.loading = 'cuIcon-loading2';

				// 模拟发送
				setTimeout(() => {
					this.text = '上传';
					this.loading = '';

				}, 3000);

			}
		}
	}
</script>

<style>

</style>

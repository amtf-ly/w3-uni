<template>
	<view class="ggao">
		<!-- 		<image  src="@/static/jiuqu-bl2.png" mode="aspectFill"></image>
		{{currentIndex}} -->
			<!-- 		<swiper style="height: 200px;" circular indicator-dots indicator-color="rgba(255,255,255,0.5)"
			indicator-active-color="#fff" autoplay @change="swiper_change">
			<swiper-item v-for="(item,index) in a4.广告" :key="item._id">
				<navigator :url="`/pages/guan_gao/guan_gao?id=${index}`" class="like">
					<image :src="item.link" mode="aspectFill"></image>
				</navigator>
			</swiper-item>
		</swiper> -->
		
		
		<swiper circular :current="currentIndex" @change="swiperChange">
			<swiper-item v-for="(item,index) in a4.广告" :key="item.id">
				<image :src="item.link" mode="aspectFit"></image>
			</swiper-item>
		</swiper>

		<view class="mask">
			<!-- #ifndef MP-TOUTIAO -->
			<view class="goBack" @click="goBack" :style="{top:getStatusBarHeight()+'px'}">
				<uni-icons type="back" color="#fff" size="20"></uni-icons>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script setup>
	import {
		a4_store
	} from '/stores/a4_store.js'
	const {
		a4
	} = a4_store()
	
	import {
		getStatusBarHeight
	} from "@/utils/system.js"

	import {
		reactive,
		ref
	} from 'vue';
	import {
		onLoad
	} from "@dcloudio/uni-app"

	const maskState = ref(true);
	const classList = reactive([]);
	const currentId = ref(null);
	const currentIndex = ref(0);
	const readImgs = ref([]);

	// console.log('classList: ', classList);
	// classList.push({id:1})

	classList.push({
		id: 0,
		picurl: "../../static/jiuqu-bl2.png"
	})

	onLoad(async (e) => {
		currentId.value = e.id;
	})

	const swiperChange = (e) => {
		currentIndex.value = e.detail.current;
		// currentInfo.value = classList.value[currentIndex.value]
		// readImgsFun();
		// console.log(e);
	}

	//返回上一页
	const goBack = () => {
		uni.navigateBack({
			success: () => {
			},
			fail: (err) => {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}
		})
	}
</script>
<style lang="scss" scoped>
	.ggao {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}
	}

	.mask {
		&>view {
			position: absolute;
			left: 0;
			margin: auto;
			color: #fff;
			right: 0;
			width: fit-content;
		}

		.goBack {
			width: 38px;
			height: 38px;
			background: rgba(0, 0, 0, 0.5);
			left: 30rpx;
			margin-left: 0;
			border-radius: 100px;
			top: 0;
			backdrop-filter: blur(10rpx);
			border: 1rpx solid rgba(255, 255, 255, 0.3);
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.count {
			top: 10vh;
			background: rgba(0, 0, 0, 0.3);
			font-size: 28rpx;
			border-radius: 40rpx;
			padding: 8rpx 28rpx;
			backdrop-filter: blur(10rpx);
		}

		.time {
			font-size: 140rpx;
			top: calc(10vh + 80rpx);
			font-weight: 100;
			line-height: 1em;
			text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
		}

		.date {
			font-size: 34rpx;
			top: calc(10vh + 230rpx);
			text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
		}

		.footer {
			background: rgba(255, 255, 255, 0.8);
			bottom: 10vh;
			width: 65vw;
			height: 120rpx;
			border-radius: 120rpx;
			color: #000;
			display: flex;
			justify-content: space-around;
			align-items: center;
			box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
			backdrop-filter: blur(20rpx);

			.box {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				padding: 2rpx 12rpx;

				.text {
					font-size: 26rpx;
				}
			}
		}
	}
</style>
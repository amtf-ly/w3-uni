<template>
	<view class="content a-pa-md">
		<uni-title type="h1" title="大驾光临，蓬荜生辉 ✨" color="blue" align="center"></uni-title>

		<uni-card class="置顶栏">
			<uni-list>
				<uni-list-item title="body插槽" v-for="item in a4.置顶" :key="item._id">
					<template v-slot:body class="row">
						<view class="row justify-between" style="flex: 1;">
							<view class="">{{item.biaoti}}</view>
							<view class="">🚀</view>
							<uni-link v-if="item.type=='link'" class="a-fugaitouming" :href="item.link"
								:text="item.biaoti" color="blue" font-size="16" showUnderLine='false'>
							</uni-link>
						</view>
					</template>
				</uni-list-item>
			</uni-list>
		</uni-card>

		<uni-card title="最新消息🔔">
			<uni-list-item v-if="!a4.最新消息.length" title="幸得太平无一事~~" />
			<template v-else>
				<uni-list-item title="body插槽" link v-for="item in a4.最新消息" :key="item._id">
					<template v-slot:body>
						{{item.biaoti}}
						<uni-link v-if="item.type=='link'" class="a-fugaitouming" :href="item.link" :text="item.biaoti"
							color="blue" font-size="16" showUnderLine='false'>
						</uni-link>
					</template>
				</uni-list-item>
			</template>
		</uni-card>

		<!-- 		<view class="广告包裹" id="广告" style="position: relative;">
			<uni-tag :inverted="false" :text="a4.广告[轮播index]?.biaoti" type="primary" circle class="kktag" />
			<view class="广告 guangao a-card">
				<swiper style="height: 200px;" circular indicator-dots indicator-color="rgba(255,255,255,0.5)"
					indicator-active-color="#fff" autoplay @change="swiper_change">
					<swiper-item v-for="(item,index) in a4.广告" :key="item._id">
						<navigator :url="`/pages/guan_gao/guan_gao?id=${index}`" class="like">
							<image :src="item.link" mode="aspectFill"></image>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view> -->

	</view>

</template>

<script setup>
	// const a="/static/logo.png"

	import {
		computed,
		ref
	} from 'vue';
	import {
		reactive
	} from 'vue';

	const 轮播index = ref(0)

	function swiper_change(e) {
		// console.log('e: ', e);
		轮播index.value = e.detail.current
	}

	import {
		a4_store
	} from '/stores/a4_store.js'
	const {
		a4
	} = a4_store()

	// import {
	// 	inject
	// } from 'vue';
	// const ws8 = inject('ws8');
	// const ws8 = reactive({
	// 	msg: [{
	// 		appId: "__UNI__6AE84E0",
	// 		user_id: "664852bb8600835ad4c2be7b",
	// 		username: "ly",
	// 		title: "请充电",
	// 		天数: 1,
	// 		价格: 999,
	// 		time: Date.now()
	// 	}]
	// })

	async function 充电(item) {
		console.log('去充电item: ', item);
		if (item.已处理 == true) {
			uni.showToast({
				title: "已处理",
				icon: 'error'
			})
			return
		}
		try {
			// const res = await a_admin.get1_nengliang()
			let 天数 = item.天数
			let req = {
				user_id: item.user_id,
				appId: item.appId,
				天数,
			}
			const res = await a_admin.update1_nengliang(req)
			uni.showToast({
				title: `充电 ${天数} 天 完成`,
			})

			console.log('充电res: ', res);
			item.已处理 = true
		} catch (error) {
			console.error('发生错误:', error);
		}
	}
</script>

<style lang="scss" scoped>
	.a-bg {
		background-color: orange;
	}

	.kktag {
		position: absolute;
		top: -20rpx;
		right: 80rpx;
		z-index: 1;
	}

	.guangao {
		image {
			width: 100%;
			// height: 100%;
		}

	}
</style>
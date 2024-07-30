<script setup>
	import {
		provide,
		reactive,
		ref
	} from 'vue';

	const ws8 = reactive({msg:[]})
	provide("ws8", ws8)

	provide('需要刷新了', ref(0));
	
	import {
		onLaunch
	} from '@dcloudio/uni-app'
	onLaunch(() => {
		console.log('App Launch')
		uni.onPushMessage((res) => {
			console.log("收到ws8消息：", res) //监听ws8消息
			ws8.msg.unshift(res.data.payload.text)
		})

		// uni.getPushClientId({
		// 	success: (res) => {
		// 		let push_clientid = res.cid
		// 		console.log('客户端ws8标识:', push_clientid)
		// 		ws8.push_clientid=push_clientid
		// 	},
		// 	fail(err) {
		// 		console.log(err)
		// 	}
		// })

	})
</script>

<style lang="scss">
	// @import '@/uni_modules/uni-scss/index.scss';
	@import "@/css/amtf-scss.scss";
	@import "@/css/uni-app-scss.scss";

	// @import "@/static/fonts/iconfont.css";
</style>
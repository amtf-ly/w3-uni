import {
	defineStore
} from "pinia";

import {
	computed,
	onMounted,
	onUnmounted,
	reactive,
	ref,
	toRaw,
	watch,
} from "vue";
import {
	store,
	mutations
} from '@/uni_modules/uni-id-pages/common/store.js'

const a_admin = uniCloud.importObject("a_admin", {
	customUI: true, //取消自动提示交换界面
});


import {
	inject
} from 'vue';


export const use_user = defineStore("user", {
	// 为了完整类型推理，推荐使用箭头函数
	state: () => {
		// console.log(uni);
		// uni.showToast({
		// 	title: "发布成功"
		// });
		const db = uniCloud.database();
		const dbCmd = db.command;
		const 需要刷新了 = inject('需要刷新了');

		// console.log('store: ', store);
		// store.userInfo 不能用ref
		const user = reactive({
			userInfo: computed(() => store.userInfo),
			hasLogin: computed(() => store.hasLogin),
			daoqi_date: 0,
			likeNum: 0
			// 显示昵称 : computed(() => user.userInfo.nickname?.trim()||user.userInfo.username||user.userInfo.mobile),
			// 图片路径 : ""
		})

		// watch(() => user.hasLogin, (newValue, old) => { //只监听登录状态切换的话，自己发布了文章不会更新
		watch(user, (newValue, old) => {
			// console.log("hasLogin变了 newValue 👉", newValue);
			// console.log("hasLogin变了 old 👉", old);
		}, {
			immediate: true
		})

		watch(需要刷新了, (newValue, old) => {
			// console.log('需要刷新了: ', 需要刷新了);
			// console.log("需要刷新了 newValue 👉", newValue?.value);
			// console.log("需要刷新了 old 👉", old?.value);
		}, {
			immediate: true
		})


		return {
			user
		};
	},
});
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

export function user_hook(userInfo, 判断是否登陆 = false) {
	// user 可能被删除了，没有userInfo
	const 展示用户名 = computed(() => userInfo?.nickname?.trim() || userInfo?.username || userInfo?.mobile)

	// 如果用computed ，异步获取远端图片时没法弄，只能得到promise
	const 展示用户头像 = ref('')
	// 虽然只是监听了store,但是开启了immediate
	// watch([store,userInfo,监听对象], async (newValue, old) => {
	watch(store, async (newValue, old) => {
		// console.log("user_hook监听到变化了");
		// console.log("newValue",newValue);
		// console.log("old",old);
		// 不能用@指定路径，而且是相对于被引用的vue页面的路径，被引用的vue页面层级不一样可能 噢噢
		展示用户头像.value = "../../static/images/笑脸h.png"

		// 个人用户界面需要判断
		if (判断是否登陆) {
			if (!store.hasLogin) {
				return
			}
		}

		// const 原路径 = userInfo?.avatar_file?.url
		// if (!原路径) {
		// 	return
		// }
		// if (原路径 && 原路径.substring(0, 8) == "cloud://") {
		// 	const res = await uniCloud.getTempFileURL({
		// 		fileList: [原路径],
		// 	})
		// 	展示用户头像.value = res.fileList[0].tempFileURL
		// 	// console.log("展示用户头像.value: " ,展示用户头像.value);
		// } else {
		// 	展示用户头像.value = 原路径
		// 	// console.log("展示用户头像.value: " ,展示用户头像.value);
		// }

		const res = await 处理用户图像云端路径(userInfo)
		// console.log("res: " + res);
		// console.log("展示用户头像要变了 " + 展示用户头像.value);
		if (res) 展示用户头像.value = res
		
		// console.log("展示用户头像要变了 " + 展示用户头像.value);
	}, {
		immediate: true
	})


	return {
		展示用户名,
		展示用户头像
	};
}

export async function 处理用户图像云端路径(userInfo_kk) {
	// console.log("userInfo_kk:",userInfo_kk);
	const 原路径 = userInfo_kk?.avatar_file?.url
	// console.log("原路径:",原路径);

	if (!原路径) {
		return null
	}
	if (原路径 && 原路径.substring(0, 8) == "cloud://") {
		const res = await uniCloud.getTempFileURL({
			fileList: [原路径],
		})
		return res.fileList[0].tempFileURL

		// console.log("展示用户头像.value: " ,展示用户头像.value);
	} else {
		return 原路径
		// console.log("展示用户头像.value: " ,展示用户头像.value);
	}
}

// export  function 字段映射(状态code){
export const dic = {
	删除状态: {
		true: "已作废",
		false: "正常状态"
	},
	0: "草稿",
	1: "已发布"
}
// return 状态字典[状态code]
// return {
// 	状态
// };
// }

import {
	getCurrentInstance
} from 'vue'

export function use_全局api() {
	const uniIDHasRole = getCurrentInstance().appContext.config.globalProperties.uniIDHasRole
	return {
		uniIDHasRole
	}
}
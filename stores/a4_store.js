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

const a_admin = uniCloud.importObject("a_admin", {
	customUI: false //true==取消自动提示交换界面
});

export const a4_store = defineStore("amtf", {
	// 为了完整类型推理，推荐使用箭头函数
	state: () => {
		const arr = reactive([])
		a_admin.get_xiaocxu().then((res) => {
			// console.log('get_xiaocxu res: ', res);
			arr.length = 0
			arr.push(...res.data);
		});

		const a4 = reactive({})

		a4.广告 = computed(
			() => {
				// console.log("编号", 编号);
				const record = arr.filter((item) => item.lanmu === "广告");
				return record;
			}
		)
		a4.置顶 = computed(
			() => {
				const record = arr.filter((item) => item.lanmu === "置顶");
				// console.log('record: ',record);
				return record;
			}
		)
		a4.最新消息 = computed(
			() => {
				const record = arr.filter((item) => item.lanmu === "最新消息");
				return record;
			}
		)

		return {
			a4
		};
	},
});
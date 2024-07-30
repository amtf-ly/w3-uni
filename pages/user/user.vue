<template>
	<view class="user">
		<!-- <view>{{user.图片路径}}</view> -->
		<!-- <view>{{user.userInfo}}</view> -->
		<!-- 		{{`push_clientid: ${ws8.push_clientid}`}}
		{{`ws8.msg: ${ws8.msg}`}} -->
		<view class="top">
			<view class="group" @click="toUserInfo">
				<view class="userInfo">
					<view class="pic">
						<image :src="展示用户头像" mode="aspectFill"></image>
					</view>
					<view class="text" v-if="user.hasLogin">
						<view class="nickname">{{展示用户名}}</view>

						<!-- {{user.userInfo}} -->
						<view class="year">
							<uni-dateformat :date="user.userInfo.register_date"
								:threshold="[3600,99*365*24*60*60*1000]"></uni-dateformat>
							注册
						</view>
					</view>
					<view class="text" v-else>
						<view class="nickname">点击登录</view>
					</view>

				</view>

				<view class="more">
					<text class="iconfont icon-a-10-you"></text>
				</view>
			</view>

			<view class="bg">
				<image :src="展示用户头像" mode="aspectFill"></image>
			</view>
		</view>

		<view class="main">
			<view class="group">
				<uni-list>
					<uni-list-item title="body插槽" link>
						<template v-slot:body>
							联系客服🙂
							<button open-type="contact" class="a-fugaitouming">联系客服</button>
						</template>
					</uni-list-item>
				</uni-list>
			</view>

			<view class="group" v-show="user.hasLogin">
				<uni-list>
					<uni-list-item title="退出登录" link @click="logout">
					</uni-list-item>
				</uni-list>
			</view>

			<view class="group">
				<uni-list>
					<uni-section title="推送消息👇" type="line">
						<uni-list-item v-if="!ws8.msg.length" title="幸得太平无一事~~" />
						<template v-else>
							<uni-list-item v-for="(item,index) in ws8.msg" :key="item.time" class="a-bg" :title="aa"
								showArrow @click="充电(item)" clickable note="">
								<template #body>
									<!-- {{item.user_id}} -->
									<!-- <text>{{item.appId}}</text> -->
									<!-- <text>{{`${item.username}:${item.title}  ${item.天数}天 ${item.价格}元`}}</text> -->
									<text>{{`${item.username}:${item.title}`}}</text>
									<text>{{item.appName}}</text> 日期：
									<uni-dateformat :date="item.time" :class="{'已处理':item.已处理}" />
								</template>
							</uni-list-item>
						</template>
					</uni-section>
				</uni-list>
			</view>

		</view>

	</view>
</template>

<script setup>
	import {
		onReachBottom,
		onPullDownRefresh
	} from '@dcloudio/uni-app'

	onPullDownRefresh(async () => {
		console.log('onPullDownRefresh');
		location.reload();
		// setTimeout(function() {
		// 	uni.stopPullDownRefresh();
		// }, 1000);
	})

	const a_admin = uniCloud.importObject("a_admin", {
		customUI: true, //取消自动提示交换界面
	});

	import {
		inject
	} from 'vue';
	const ws8 = inject('ws8');
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
			}
			const res = await a_admin.update1_nengliang(req)
			uni.showToast({
				title: `充电后台处理完成`,
			})

			console.log('充电res: ', res);
			item.已处理 = true

			req.title = `充电后台处理完成`
			a_admin.push_chondianwancheng(req).then((res) => {
				console.log('催充电res: ', res);
			});

		} catch (error) {
			console.error('发生错误:', error);
		}
	}



	const 需要刷新了 = inject('需要刷新了');
	import {
		ref,
		onMounted,
		computed
	} from 'vue';

	import {
		mutations
	} from '@/uni_modules/uni-id-pages/common/store.js';
	import {
		use_user
	} from './store'
	const {
		user,
		get1
	} = use_user()

	import {
		user_hook
	} from '@/hooks/user_hook.js'

	import {
		onShow
	} from '@dcloudio/uni-app'

	const {
		展示用户名,
		展示用户头像
	} = user_hook(user.userInfo, true)
	const db = uniCloud.database();

	const goFeedback = () => {
		if (goLoginPage()) return;
		uni.navigateTo({
			url: "/uni_modules/uni-feedback/pages/opendb-feedback/opendb-feedback"
		});
	};

	const toUserInfo = () => {
		if (user.hasLogin) {
			uni.navigateTo({
				url: '/uni_modules/uni-id-pages/pages/userinfo/userinfo'
			});
		} else {
			let pages = getCurrentPages();
			let route = pages[pages.length - 1].route;
			uni.navigateTo({
				url: '/uni_modules/uni-id-pages/pages/login/login-withpwd?uniIdRedirectUrl=/' + route
			});
		}
	};

	const logout = () => {
		if (goLoginPage()) return;
		uni.showModal({
			title: "是否确认退出?",
			success: res => {
				// console.log(res);
				if (res.confirm) {
					// console.log(user.hasLogin);
					mutations.logout();
					// console.log(user.hasLogin);

				}
			}
		});
	};

	const goLoginPage = () => {
		if (!user.hasLogin) {
			uni.showToast({
				title: "未登录",
				icon: "none"
			});
			return true;
		}
		return false;
	};

	onMounted(() => {});
	onShow(() => {
		// console.log('App Show')
		// get1();
	});
</script>

<style lang="scss" scoped>
	:deep(.uni-list--border-top) {
		opacity: 0;
	}

	.已处理 {
		background-color: orange;
	}

	.top {
		height: 300rpx;
		background: #bbb;
		padding: 0 30rpx;
		// 考虑小程序胶囊区域👇
		padding-top: var(--status-bar-height);
		position: relative;
		display: flex;
		align-items: center;

		.group {
			position: relative;
			z-index: 10;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			color: #fff;

			.userInfo {
				display: flex;
				width: 100%;
				align-items: center;

				.pic {
					width: 120rpx;
					height: 120rpx;
					border-radius: 50%;
					overflow: hidden;
					border: 2px solid #fff;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.text {
					padding-left: 20rpx;

					.nickname {
						font-size: 44rpx;
						font-weight: 600;
					}

					.year {
						font-size: 26rpx;
						opacity: 0.6;
						padding-top: 5rpx;
					}
				}
			}

			.more {
				.iconfont {
					font-size: 40rpx;
				}
			}

		}

		.bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;

			image {
				width: 100%;
				height: 100%;
				filter: blur(20px);
				transform: scale(1);
				opacity: 0.5;
			}
		}
	}

	.main {
		width: 100%;
		min-height: 200rpx;
		background: #fff;
		border-radius: 30rpx;
		transform: translateY(-30rpx);
		padding: 30rpx 0;

		.info {
			padding: 10rpx 30rpx;
			display: flex;
			font-size: 30rpx;

			.item {
				padding-right: 20rpx;
				color: #888;

				text {
					font-weight: 600;
					color: #333;
				}
			}
		}

		.group {
			padding: 15rpx 30rpx;
			border-bottom: 15rpx solid #f4f4f4;
		}

		.group:last-child {
			border: none;
		}

	}
</style>
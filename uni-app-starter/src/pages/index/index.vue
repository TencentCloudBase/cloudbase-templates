<template>
	<view class="content">
		<img class="logo" alt="CloudBase logo" :src="`${g_prefix}static/cloudbase.png`" />
   		<img class="logo" alt="Vue logo" :src="`${g_prefix}static/logo.png`" />
		<HelloWorld msg="欢迎使用云开发 CloudBase uni-app App" />
	</view>
</template>

<script>
	import HelloWorld from "@/components/HelloWorld.vue";
	export default {
		components: {
			HelloWorld
		}
	}
</script>

<style>
	.content {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60rpx;
	}

	.logo {
		width: 120rpx;
		height: 120rpx;
		padding: 10rpx;
	}
</style>

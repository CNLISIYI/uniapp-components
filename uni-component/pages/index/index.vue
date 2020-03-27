<template>
	<view class="">
		<navigator hover-class="none" url="../datecutdown/index">日期倒计时</navigator>
		<navigator hover-class="none" url="../listcarousel/index">播报效果</navigator>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	navigator {
		display: block;
		width: 80vw;
		height: 108upx;
		margin: 20upx auto;
		text-align: center;
		font-size: 40upx;
		font-weight: 600;
		line-height: 108upx;
		color: pink;
		border: 1px solid #48c8ff;
		text-decoration: none;
	}
</style>

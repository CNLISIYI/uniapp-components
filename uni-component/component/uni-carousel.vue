<template>
	<view>
		<view class="news-list" v-if="isaniok">
			<view class="firtotop">{{ Arr[index] }}</view>
			<view class="sectofir">{{ Arr[index + 1] }}</view>
			<view class="thitosec">{{ Arr[index + 2] }}</view>
			<view class="fortothi">{{ Arr[index + 3] }}</view>
		</view>
		<view class="news-list" v-if="!isaniok">
			<view>{{ ArrCopy[0] }}</view>
			<view>{{ ArrCopy[1] }}</view>
			<view>{{ ArrCopy[2] }}</view>
			<view>{{ ArrCopy[3] }}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'UniCarousel',
	props: {
		Arr: {
			type: Array,
			default: []
		},
		index: {
			type: Number,
			default: 0
		},
		isaniok: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			ArrCopy: []
		};
	},
	created() {
		this.ArrCopy = this.Arr.slice(1);
		this.ArrCopy.push(this.Arr[0]);
	},
	methods: {}
};
</script>

<style>
.news-list {
	position: relative;
	width: 326upx;
	height: 144upx;
	color: #da8e2d;
	margin: 0 auto;
	overflow: hidden;
}
.news-list view {
	position: absolute;
	width: 326upx;
	height: 48upx;
	line-height: 48upx;
	font-size: 28upx;
	border-radius: 24upx;
	background: #ffe395;
	text-align: center;
}
.news-list view:first-child {
	top: 0upx;
	transform: scale(0.9);
	opacity: 0.7;
}
.news-list view:nth-child(2) {
	top: 48upx;
	transform: scale(1);
	opacity: 1;
}
.news-list view:nth-child(3) {
	top: 96rpx;
	transform: scale(0.9);
	opacity: 0.7;
}
.news-list view:last-child {
	top: 144rpx;
	transform: scale(0.8);
	opacity: 0.7;
}

.fortothi {
	animation: forTothi 2s linear infinite forwards;
}
.thitosec {
	animation: thiTosec 2s linear infinite forwards;
}
.sectofir {
	animation: secTofir 2s linear infinite forwards;
}
.firtotop {
	animation: firTotop 2s linear infinite forwards;
}
@keyframes forTothi {
	0% {
		top: 144rpx;
		opacity: 0.7;
		transform: scale(0.9);
	}
	70% {
		top: 96rpx;
		opacity: 0.7;
		transform: scale(0.9);
	}
	100% {
		top: 96rpx;
		opacity: 0.7;
		transform: scale(0.9);
	}
}
@keyframes thiTosec {
	0% {
		top: 96rpx;
		opacity: 0.7;
		transform: scale(0.9);
	}
	70% {
		top: 48upx;
		transform: scale(1);
		opacity: 1;
	}
	100% {
		top: 48upx;
		transform: scale(1);
		opacity: 1;
	}
}
@keyframes secTofir {
	0% {
		top: 48upx;
		transform: scale(1);
		opacity: 1;
	}
	70% {
		top: 0upx;
		transform: scale(0.9);
		opacity: 0.7;
	}
	100% {
		top: 0upx;
		transform: scale(0.9);
		opacity: 0.7;
	}
}
@keyframes firTotop {
	0% {
		top: 0upx;
		transform: scale(0.9);
		opacity: 0.7;
	}
	100% {
		top: -50upx;
	}
	70% {
		top: -50upx;
	}
}
</style>

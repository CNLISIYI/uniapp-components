<template>
	<view>
		<div v-if="d == '000' && h == '00' && i == '00' && s == '00'" class="m-activity-stop bgfff">活动已结束</div>
		<div v-else class="m-activity-times bgfff">
			距离活动结束还剩：
			<text class="_span">{{ dd[0] }}</text>
			<text class="_span">{{ dd[1] }}</text>
			<text class="_span">{{ dd[2] }}</text>
			<text class="_i">天</text>
			<text class="_span">{{ hh[0] }}</text>
			<text class="_span">{{ hh[1] }}</text>
			<text class="_i">:</text>
			<text class="_span">{{ ii[0] }}</text>
			<text class="_span">{{ ii[1] }}</text>
			<text class="_i">:</text>
			<text class="_span">{{ ss[0] }}</text>
			<text class="_span">{{ ss[1] }}</text>
		</div>
	</view>
</template>
<script>
export default {
	name: 'UniCountdown',
	props: {
		day: {
			type: Number,
			default: 0
		},
		hour: {
			type: Number,
			default: 0
		},
		minute: {
			type: Number,
			default: 0
		},
		second: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			timer: null,
			syncFlag: false,
			d: '000',
			h: '00',
			i: '00',
			s: '00',
			leftTime: 0,
			seconds: 0,
			dd: [],
			hh: [],
			ii: [],
			ss: []
		};
	},
	watch: {
		day(val) {
			this.changeFlag();
		},
		hour(val) {
			this.changeFlag();
		},
		minute(val) {
			this.changeFlag();
		},
		second(val) {
			this.changeFlag();
		}
	},
	created: function(e) {
		this.startData();
	},
	beforeDestroy() {
		clearInterval(this.timer);
	},
	methods: {
		toSeconds(day, hours, minutes, seconds) {
			return day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;
		},
		timeUp() {
			clearInterval(this.timer);
			this.$emit('timeup');
		},
		countDown() {
			let seconds = this.seconds;
			let [day, hour, minute, second] = [0, 0, 0, 0];
			if (seconds > 0) {
				day = Math.floor(seconds / (60 * 60 * 24));
				hour = Math.floor(seconds / (60 * 60)) - day * 24;
				minute = Math.floor(seconds / 60) - day * 24 * 60 - hour * 60;
				second = Math.floor(seconds) - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60;
			} else {
				this.timeUp();
			}
			if (day < 100) {
				day = '0' + day;
				if (day < 10) {
					day = '00' + day;
				}
			}
			if (hour < 10) {
				hour = '0' + hour;
			}
			if (minute < 10) {
				minute = '0' + minute;
			}
			if (second < 10) {
				second = '0' + second;
			}
			this.d = day;
			this.h = hour;
			this.i = minute;
			this.s = second;
			this.dd = this.d.toString().split('');
			this.hh = this.h.toString().split('');
			this.ii = this.i.toString().split('');
			this.ss = this.s.toString().split('');
		},
		startData() {
			this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second);
			if (this.seconds <= 0) {
				return;
			}
			this.countDown();
			this.timer = setInterval(() => {
				this.seconds--;
				if (this.seconds < 0) {
					this.timeUp();
					return;
				}
				this.countDown();
			}, 1000);
		},
		changeFlag() {
			if (!this.syncFlag) {
				this.seconds = this.toSeconds(this.day, this.hour, this.minute, this.second);
				this.startData();
				this.syncFlag = true;
			}
		}
	}
};
</script>
<style lang="scss">
.m-activity-times,
.m-activity-stop {
	height: 100upx;
	font-size: 28upx;
	line-height: 100upx;
	text-align: center;
	letter-spacing: 0.2upx;
	color: #262626;
	border-bottom: 1px solid #eee;
}
@media screen and (max-width: 320px) {
	.m-activity-times {
		padding-right: 0upx;
	}
}
.m-activity-stop {
	padding: 0upx;
	text-align: center;
	color: #8c8c8c;
}
.m-activity-times span {
	width: 36upx;
	height: 54upx;
	margin-right: 2upx;
	display: inline-block;
	font-size: 28upx;
	line-height: 54upx;
	text-align: center;
	color: #fff;
	background: #1a8cff;
	border-radius: 12upx;
}
.m-activity-times i {
	display: inline-block;
	margin: 0 6upx 0 4upx;
	color: #1a8cff;
}
</style>

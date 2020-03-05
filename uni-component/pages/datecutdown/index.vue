<template>
	<uni-countdown :day="dd" :hour="hh" :minute="mm" :second="ss"></uni-countdown>
</template>

<script>
import uniCountdown from '../../component/uni-countdown.vue';
export default {
    data() {
        return {
            dd: 0,
            hh: 0,
            mm: 0,
            ss: 0,
			begintime: "2020/1/1",
			endtime: "2020/4/30"
        };
    },
    components: {
        uniCountdown
    },
	onLoad() {
		this.getTimeCount();
	},
	methods: {
		// 获取倒计时时间
		getTimeCount() {
		    let _this = this;
		    _this.begintime = _this.tools.formatSecond(new Date());
		    let msTimes = new Date(_this.endtime).getTime() - new Date(_this.begintime).getTime();
		    _this.dd = Math.floor(msTimes / (24 * 3600 * 1000));
		    let leave1 = msTimes % (24 * 3600 * 1000);
		    _this.hh = Math.floor(leave1 / (3600 * 1000));
		    let leave2 = leave1 % (3600 * 1000);
		    _this.mm = Math.floor(leave2 / (60 * 1000));
		    let leave3 = leave2 % (60 * 1000);
		    _this.ss = Math.round(leave3 / 1000);
		}
	}
}
</script>

<style lang="scss">

</style>

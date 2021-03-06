import Vue from 'vue'
import App from './App'

import tools from "./common/js/util";

import uniCountdown from "./component/uni-countdown.vue"
Vue.component( "uniCountdown", uniCountdown );

import uniCarousel from "./component/uni-carousel.vue"
Vue.component( "uniCarousel", uniCarousel );



Vue.prototype.tools = tools;

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

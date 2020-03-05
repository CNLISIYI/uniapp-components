###公共部分
1. common/js中的util.js放的是一些常用的公共方法，通过this.tools.xxx的方式调用。
2. component中放的是封装的所有组件源码，包括组件的样式、结构。
3. pages中放的是每个组件对应的调用页面，页面中包含某些组件在调用时必须用到的方法。
4. pages中的index不做任何用处。
5. 所有组件都在main.js中引用，方式为：import xxx from "./component/xxx.vue";Vue.component("xxx",xxx);。

###日期时间倒计时组件
1. 所以相关文件包括：
	- 组件源码文件：component/uni-countdown.vue
	- 使用组件的页面：pages/datecutdown/index.vue
	- 换算日期格式的方法：common/js/util.js
	- 组件引入：main.js
	- 使用组件的页面配置：pages.json
	- 效果图：static/datecutdown.gif
2. 参数：
	- 天：dd，最多3位，初始值为"000"。
	- 时：hh，2位，初始值为"00"。
	- 分：mm，2位，初始值为"00"。
	- 秒：ss，2位，初始值为"00"。
3. 使用组件：
	- 在<template></template>中直接使用<uni-countdown>标签引入组件，需要定义参数dd、hh、mm、ss。
	- 在<script></script>中需要import uniCountdown from '../../component/uni-countdown.vue';，并在components中使用。
	- 在data()中需要定义开始时间(begintime)和结束时间(endtime)，下面方法中的msTime计算的就是这两者之间的时间差
	- getTimeCount()要在需要的地方调用。



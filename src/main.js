import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
import '@/styles/index.scss' // global css

Vue.config.productionTip = false
Vue.prototype.$http = axios;


new Vue({
	router,
	store,
	render: function (h) {
		return h(App)
	}
}).$mount('#app')

import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import app from "./modules/app"
import axios from 'axios'

Vue.use(Vuex);
Vue.prototype.$http = axios;

const store = new Vuex.Store({
	modules : {
		app
	},
	getters
})


export default store
import Vue from "vue"
import Vuex from "vuex"
import getters from "./getters"
import setters from "./setters"
import app from "./modules/app"

Vue.use(Vuex);

const store = new Vuex.Store({
	modules : {
		app
	},
	getters
})


export default store
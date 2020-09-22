import axios from "axios"

const state = {
	introGame: null,
	categoryGame: null,
	currentCategory : null,
	isLoading: false
}

const mutations = {
	SET_LOADING(state) {
		state.isLoading = !state.isLoading;
	},
	SET_INTROGAME(state, game) {
		state.introGame = game;
	},
	SET_CATEGORYGAME(state, game) {
		state.categoryGame = game;
	},
	SET_CATEGORY(state, game) {
		state.currentCategory = game;
	}
}

const actions = {
	getIntroGame({commit}) {
		return new Promise((resolve, reject) => {
			axios.get('https://api.rawg.io/api/games')
				.then((res) => {
					commit('SET_INTROGAME', res.data);
					resolve();
				}).catch(error => {
				reject(error);
			})
		})
	},
	getSearchGame({commit}, type) {
		return new Promise((resolve, reject) => {
			let orderType = '';
			switch(type.ordering) {
				case 'default' :
					break;
				case 'date' :
					orderType = '&dates=2020-08-01,2020-09-01';
					break;
				default :
					orderType = '&genres=' + type.ordering;
					break;
			}
			axios.get('https://api.rawg.io/api/games?ordering=null' + orderType)
				.then((res) => {
					commit('SET_CATEGORYGAME', res.data);
					resolve();
				}).catch(error => {
				reject(error);
			})
		})
	}
}

export default {
	state,
	mutations,
	actions
}

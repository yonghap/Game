import axios from "axios"

const state = {
	introGame: null,
	categoryGame: [],
	isLoading: false,
	currentType : 'default'
}

const mutations = {
	SET_LOADING(state) {
		state.isLoading = !state.isLoading;
	},
	SET_INTROGAME(state, game) {
		state.introGame = game;
	},
	SET_TYPE(state, type) {
		state.currentType = type;
	},
	SET_CATEGORYGAME(state, game) {
		if (state.categoryGame.length > 0) {
			Array.prototype.push.apply(state.categoryGame, game);
		} else {
			state.categoryGame = game;
		}
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
			if (state.currentType != type.ordering) {
				state.categoryGame = []
			}
			commit('SET_TYPE', type.ordering);
			let orderType = '';
			switch(type.ordering) {
				case 'default' :
					break;
				case 'date' :
					// let d = ("0" + (new Date().getMonth() + 1)).slice(-2);
					orderType = '&dates=2020-08-01,2020-10-31';
					break;
			}
			axios.get('https://api.rawg.io/api/games?ordering=null&page=' + type.page + orderType)
				.then((res) => {
					commit('SET_CATEGORYGAME', res.data.results);
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

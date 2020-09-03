import axios from "axios";

const state = {
	introGame : null,
	categoryGame : null
}

const mutations = {
	SET_INTROGAME(state, game) {
		state.introGame = game;
	},
	SET_CATEGORYGAME(state, game) {
		state.categoryGame = game;
	},
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
	getSearchGame({commit},type) {
		return new Promise((resolve, reject) => {
			axios.get('https://api.rawg.io/api/games?dates=2020-01-01,2020-12-31&&ordering='+type.ordering)
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
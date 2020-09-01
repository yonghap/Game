import axios from "axios";

const state = {
	introGame : null
}

const mutations = {
	SET_GAME(state, game) {
		state.introGame = game;
	},
}

const actions = {
	getIntroGame({commit}) {
		return new Promise((resolve, reject) => {
			axios.get('https://api.rawg.io/api/games')
				.then((res) => {
					commit('SET_GAME', res.data);
					resolve();
				}).catch(error => {
				reject(error);
			})
		})
	}
	// getSearchGame({commit}) {
	// 	return new Promise((resolve, reject) => {
	// 		axios.get('https://api.rawg.io/api/games?ordering=released')
	// 			.then((res) => {
	// 				commit('SET_GAME', res.data);
	// 				resolve();
	// 			}).catch(error => {
	// 			reject(error);
	// 		})
	// 	})
	// }
}

export default {
	state,
	mutations,
	actions
}
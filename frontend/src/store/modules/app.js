import axios from "axios";

const state = {
	game : null
}

const mutations = {
	SET_GAME(state, game) {
		state.game = game;
	},
}

const actions = {
	getGame({commit}) {
		return new Promise((resolve, reject) => {
			axios.get('https://jsonplaceholder.typicode.com/posts')
				.then((res) => {
					// commit('SET_GAME', res.data);
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
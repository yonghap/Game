import axios from "axios";

const state = {
	sidebar : '1',
	test : '2',
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
			axios.get('http://dummy.restapiexample.com/api/v1/employees')
				.then((res) => {
					commit('SET_GAME', res);
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
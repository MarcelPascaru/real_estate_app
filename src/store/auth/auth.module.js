import {login, register} from "@/services/auth/auth.service.js";

const state = () => ({
    accessToken: null
})

const getters = {
    getAccessToken(state) {
        return state.accessToken;
    }
}

const actions = {
    async login({commit}, payload) {
        try {
           const response = await login(payload);
           commit('LOGIN', response.token);
        } catch (e) {
            throw e;
        }
    },
    logout({commit}) {
        commit('LOGOUT');
    }
}

const mutations = {
    LOGIN(state, token) {
        localStorage.setItem('accessToken', JSON.stringify(token));
        state.accessToken = token;
    },
    LOGOUT(state) {
        localStorage.removeItem('accessToken');
        state.accessToken = null;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
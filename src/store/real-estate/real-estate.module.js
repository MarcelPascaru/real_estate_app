import {search} from "@/services/real-estate/real-estates.service.js";

const state = () => ({
    realEstates: [],
    count: 0,
    mapCenterPosition: {},
    mapMarks: []
})

const getters = {
    getRealEstates(state) {
        return state.realEstates;
    },
    getCount(state) {
        return state.count;
    },
    getMapCenterPosition(state) {
        return state.mapCenterPosition;
    },
    getMapMarks(state) {
        return state.mapMarks;
    }
}

const actions = {
    async search({commit}, payload) {
        try {
            const response = await search(payload);
            commit('SEARCH_REAL_ESTATES', response);
        } catch (e) {
            throw e;
        }
    }
}

const mutations = {
    SEARCH_REAL_ESTATES(state, realsEstates) {
        state.realEstates = realsEstates.items;
        state.count = realsEstates.total;

            let marks = realsEstates.items.map((item) => {
            return {
                position: {
                    lat: parseInt(item.lat),
                    lng: parseInt(item.lng),
                }
            };
        })

        state.mapCenterPosition = marks[0].position;
        state.mapMarks = marks;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
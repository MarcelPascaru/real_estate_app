import {readAll} from "@/services/real-estate/real-estates.service.js";

const state = () => ({
    realEstates: [],
    mapCenterPosition: {},
    mapMarks: []
})

const getters = {
    getRealEstates(state) {
        return state.realEstates;
    },
    getMapCenterPosition(state) {
        return state.mapCenterPosition;
    },
    getMapMarks(state) {
        return state.mapMarks;
    }
}

const actions = {
    async readAll({commit}) {
        try {
            const response = await readAll();
            commit('READ_ALL_REAL_ESTATES', response.items);
        } catch (e) {
            throw e;
        }
    }
}

const mutations = {
    READ_ALL_REAL_ESTATES(state, realsEstates) {
        state.realEstates = realsEstates;

        let marks = realsEstates.map((item) => {
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
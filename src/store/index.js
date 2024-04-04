import {createStore} from "vuex";
import realEstateModule from "@/store/real-estate/real-estate.module.js";
const store = createStore({
    modules: {
        realEstateModule
    }
})

export default store
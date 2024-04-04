import {createStore} from "vuex";
import realEstateModule from "@/store/real-estate/real-estate.module.js";
import authModule from "@/store/auth/auth.module.js";
const store = createStore({
    modules: {
        realEstateModule,
        authModule
    }
})

export default store
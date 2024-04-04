import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes/router.js'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from "@/store/index.js";


library.add(fas);

const app = createApp(App);

app.use(router)
app.use(store)
app.use(ElementPlus)
app.component("fa", FontAwesomeIcon)

app.mount('#app')


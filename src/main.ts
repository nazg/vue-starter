
import "./registerServiceWorker"
import FetchPlugin from "./plugins/fetch"
import OcticonPlugin from "./plugins/octicon"
import Vue from "vue"
import VueDetails from "vue-details"
import app from "./app.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

Vue.component("v-details", VueDetails)

Vue.use(FetchPlugin)

Vue.use(OcticonPlugin)

new Vue({ render: h => h(app), router, store }).$mount("#app")

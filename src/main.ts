
import "./registerServiceWorker"
import Vue from "vue"
import app from "./app.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false

new Vue({ render: h => h(app), router, store }).$mount("#app")

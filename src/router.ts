
import IndexView from "./views/IndexView.vue"
import SectionView from "./views/SectionView.vue"
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    component: IndexView,
    name: "index-view",
    path: "/",
  },
  {
    component: SectionView,
    name: "section-view",
    path: "/section/:name/",
    props: true,
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: process.env.IS_ELECTRON ? "hash" : "history",
  routes,
})

export default router

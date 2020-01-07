
import Vue from "vue"
import Vuex from "vuex"
import VuexPersist from "vuex-persist"

Vue.use(Vuex)

const vuexPersistPlugin = new VuexPersist<StoreState>({
  filter: mutation => {
    return !!mutation
  },
  key: "vuex",
  reducer: state => {
    return state
  },
  storage: window.localStorage,
})

export default new Vuex.Store<StoreState>({
  actions: {
    set(context, payload:StoreActionPayload) {
      context.commit("set", payload)
    },
  },
  mutations: {
    set(state, payload:StoreActionPayload) {
      state[payload.key] = payload.val
    },
  },
  plugins: [
    vuexPersistPlugin.plugin,
  ],
  state: {
    cfg: {},
    url: "",
  },
})

export interface StoreActionPayload {
  key: string
  val: Record<string, any>
}

export interface StoreState {
  [n: string]: Record<string, any> | string
  cfg: Record<string, any>
  url: string
}

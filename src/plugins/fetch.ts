
import ky from "ky/umd"

export class Fetch {

  private instance: typeof ky

  constructor(prefixUrl:string) {
    this.instance = ky.create({ prefixUrl })
  }

  get(name: string) {
    return this.instance.get(name)
  }

}

export default {

  install(Vue: any) {
    Object.defineProperties(Vue.prototype, {
      $fetch: {
        get() {
          return Fetch
        },
      },
    })
  },

}

export interface FetchFile {
  name: string
  url?: string
  text?: string
  data?: Record<string, any>
}

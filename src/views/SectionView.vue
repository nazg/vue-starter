
<template>
  <div class="mb-6 mt-3">
    <!-- <div class="TableObject">
      <div class="TableObject-item TableObject-item--primary">
        <input class="input-block form-control" type="text" v-model="baseUrl">
      </div>
      <div class="TableObject-item">
        <button class="btn ml-2 px-2" type="button" v-on:click="load">
          Load Provision Settings
        </button>
      </div>
    </div> -->
    <pre>{{ section }}</pre>
    <!-- <hr> -->
    <!-- <pre>{{ sections }}</pre> -->

    <!-- <div class="Box Box--condensed mt-3" v-for="file in files" v-bind:key="file.name">
      <div class="Box-header d-flex flex-items-center">
        <h3 class="Box-title overflow-hidden flex-auto">{{ file.name }}</h3>
      </div>
      <div class="Box-body">
        <pre>{{ file.content }}</pre>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
  import { Fetch } from "../plugins/fetch"
  import Vue from "vue"
  import { mapState } from "vuex"
  // import YAML from "js-yaml"

  export default Vue.extend({
    props: {
      name: { default: null, type: String },
    },
    data() {
      return {
        // baseUrl: "http://127.0.0.1:8081/prov" as string,
        // files: [] as ScriptFile[],
      }
    },
    // computed: mapState({
    //   // arrow functions can make the code very succinct!
    //   count: state => state.count,
    //   // passing the string value 'count' is same as `state => state.count`
    //   countAlias: "count",
    //   // to access local state with `this`, a normal function must be used
    //   countPlusLocalState (state) {
    //     return state.count + this.localCount
    //   },
    // }),
    computed: {
      fetch(): Fetch {
        return new this.$fetch(this.cfg.url)
      },
      section(): any {
        if (this.cfg.data) {
          const section = this.cfg.data.find((el:any) => el.name === this.name)
          if (section) {
            return section
          }
        }
        return {}
      },
      ...mapState({ cfg: "cfg" }),
    },
    // created() {
    //   if (!this.section.url) {
    //     console.log("mounted")
    //   }
    // },
    methods: {
      async load() {
        // this.files = YAML.safeLoad((await this.fetch.get("index.yaml")).body as string).map((file:any) => {
        //   return {
        //     ...file,
        //     content: "",
        //   }
        // })
        // this.files.forEach(async (file:Record<string, any>) => {
        //   file.content = (await this.fetch.get(file.name)).body as string
        //   // console.log(file.content)
        // })

        // (await this.fetch.get(file.name)).body as string
        // this.fetch.index.then(
        //   (res) => {
        //     // this.files.index = (res.body as string)
        //     this.files.index = res.body as string
        //     console.log(res.body)
        //   },
        // )
      },
    },
  })

  // export interface ScriptFile {
  //   name: string
  //   content: string
  // }
</script>

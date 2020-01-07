
<template>
  <v-details class="details-reset details-overlay details-overlay-blured" v-model="open">
    <summary class="btn btn-outline px-3">Load Playbook</summary>
    <div class="Box Box--overlay Box--overlay--wide details-dialog d-flex flex-column anim-fade-in fast">
      <div class="Box-body">
        <dl class="form-group my-0">
          <dt><label>Index URL</label></dt>
          <dd><input class="form-control input-block" type="text" v-model="form.url"></dd>
        </dl>
      </div>
      <div class="Box-body" v-show="err">
        <div class="flash flash-error text-center" v-show="err">{{ err }}</div>
      </div>
      <ul class="overflow-auto" v-show="val.text || val.data">
        <li class="Box-row" v-show="val.text">
          <div class="Box Box--blue Box--condensed rounded-0">
            <details open>
              <summary class="Box-header d-flex flex-items-center outline-none rounded-0">
                <h3 class="Box-title overflow-hidden flex-auto">Response Text</h3>
                <span class="Counter Counter--gray-light">{{ val.name }}</span>
              </summary>
              <syntaxt-highlighter v-bind:lang="lang" v-bind:value="val.text"/>
            </details>
          </div>
        </li>
        <li class="Box-row" v-show="val.data">
          <div class="Box Box--blue Box--condensed rounded-0">
            <details>
              <summary class="Box-header d-flex flex-items-center outline-none rounded-0">
                <h3 class="Box-title overflow-hidden flex-auto">Parsed</h3>
                <span class="Counter Counter--gray-light px-2">data</span>
              </summary>
              <syntaxt-highlighter lang="json" v-bind:value="val.data"/>
            </details>
          </div>
        </li>
      </ul>
      <div class="Box-footer">
        <div class="form-actions">
          <button class="btn px-4 float-left" v-on:click.stop="close()">Close</button>
          <button class="btn btn-primary px-4" v-on:click.stop="save()" v-bind:disabled="!val.url">Save</button>
          <button class="btn btn-outline px-4" v-on:click.stop="load()" v-bind:disabled="!form.url">Load</button>
          <button class="btn btn-danger px-4" v-on:click.stop="clear()" v-bind:disabled="!cfg.url">Clear</button>
        </div>
      </div>
    </div>
  </v-details>
</template>

<script lang="ts">
  import { Fetch, FetchFile } from "../plugins/fetch"
  import SyntaxtHighlighter from "./SyntaxtHighlighter.vue"
  import Vue from "vue"
  import { safeLoad as load } from "js-yaml"
  import { mapState } from "vuex"

  export default Vue.extend({
    components: {
      SyntaxtHighlighter,
    },
    props: {
    },
    data(): ComponentData {
      return {
        val: { name: "index.yaml" },
        lang: "yaml",
        err: null,
        form: { url: "" },
        open: false,
      }
    },
    computed: {
      fetch(): Fetch {
        return new this.$fetch(this.form.url)
      },
      ...mapState({ cfg: "cfg", url: "url" }),
    },
    created() {
      if (this.cfg.url) {
        this.val = Object.assign({}, { ...this.cfg })
      }
      if (this.url) {
        this.form.url = this.url
      }
    },
    methods: {
      close() {
        this.open = false
      },
      clear() {
        this.$store.dispatch("set", { key: "cfg", val: {} })
        this.val = Object.assign({}, {
          name: this.val.name,
        })
      },
      load() {
        if (this.form.url) {
          this.fetch.get(this.val.name).then(
            async res => {
              const ctype = (res.headers.get("Content-Type") || "").split(";", 1)[0] || "text/plain"
              const text = await res.text()
              if (ctype === "text/x-yaml") {
                this.lang = "yaml"
                this.err = null
                this.val = Object.assign({}, { name: this.val.name, url: res.url, text, data: load(text) })
              }
              else {
                this.lang = ctype === "text/html2" ? "html" : "plain"
                this.err = `Expected text/x-yaml but received ${ctype} instead.`
                this.val = Object.assign({}, { name: this.val.name, text })
              }
            },
            err => {
              this.err = err.toString()
              this.val = Object.assign({}, { name: this.val.name })
            },
          )
        }
      },
      save() {
        if (this.val.url) {
          this.$store.dispatch("set", { key: "cfg", val: this.val })
          this.$store.dispatch("set", { key: "url", val: this.form.url })
          if (this.val.data) {
            const section = this.val.data.find((el:any) => el.default)
            if (section) {
              this.$router.push({ name: "section-view", params: { name: section.name } }).catch(() => {}).finally(
                () => {
                  this.open = false
                },
              )
            }
          }
        }
      },
    },
  })

  export interface ComponentData {
    val: FetchFile
    lang: string
    err: string | null
    form: ComponentDataForm
    open: boolean
  }

  export interface ComponentDataForm {
    url: string
  }
</script>

<style lang="scss" scoped>
  details:not([open]) .Box-header {
    border-bottom: 0;
  }
</style>

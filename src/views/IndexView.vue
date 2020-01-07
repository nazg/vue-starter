
<template>
  <div>
    <div class="Box Box--blue rounded-0" v-if="cfg.data">
      <syntaxt-highlighter lang="json" v-bind:value="cfg"/>
    </div>
    <div class="blankslate text-gray" v-else>
      <h3 class="mb-1">You don’t have any Playbook loaded</h3>
      <p>Use the <span class="text-blue text-bold">blue</span> button in the top right corner.</p>
    </div>
    <syntaxt-highlighter lang="json" v-bind:value="system"/>
  </div>
</template>

<script lang="ts">
  import SyntaxtHighlighter from "../components/SyntaxtHighlighter.vue"
  import Vue from "vue"
  import { mapState } from "vuex"

  export default Vue.extend({
    components: {
      SyntaxtHighlighter,
    },
    computed: {
      ...mapState({ cfg: "cfg" }),
    },
    data() {
      return {
        system: {},
      }
    },
    created() {
      window.addEventListener("message", event => {
        if (event.data.type === "ipc-up") {
          const { channel, response } = event.data
          if (channel === "system-info") {
            this.system = response
          }
        }
      })
      window.postMessage({ type: "ipc-down", channel: "system-info" }, "*")
    },
  })
</script>

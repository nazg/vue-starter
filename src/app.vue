
<template>
  <div id="app">
    <div class="container-lg">
      <div class="Subhead Subhead--spacious border-bottom-0 mb-0">
        <div class="Subhead-heading">
          <router-link class="muted-link text-bold" v-bind:to="{ name: 'index-view' }">
            <span class="text-red">Ungoliant</span> - Playbook Runner
          </router-link>
        </div>
        <div class="Subhead-actions">
          <script-modal/>
        </div>
        <div class="Subhead-description text-bold text-gray-light">
          brought to you by <span class="text-red">nazg.xyz</span>
        </div>
      </div>
      <nav class="UnderlineNav UnderlineNav--full mb-2">
        <div class="UnderlineNav-container">
          <div class="UnderlineNav-body flex-1">
            <router-link v-for="section in sections" v-bind:key="section.name" v-bind:to="{ name: 'section-view', params: { name:section.name } }" v-slot="{ href, isExactActive, navigate }">
              <a class="UnderlineNav-item col-2" v-bind:aria-current="isExactActive" v-bind:href="href" v-on:click="navigate">
                {{ section.title }}
              </a>
            </router-link>
          </div>
          <div class="UnderlineNav-actions text-gray-light">
            <octicon-unverified class="octicon" width="32px" height="32px"/>
            <octicon-git-commit class="octicon" width="32px" height="32px"/>
            <octicon-file class="octicon" width="32px" height="32px"/>
            <octicon-git-commit class="octicon" width="32px" height="32px"/>
            <octicon-gear class="octicon" width="48px" height="48px"/>
            <octicon-git-commit class="octicon" width="32px" height="32px"/>
            <octicon-file-code class="octicon" width="32px" height="32px"/>
            <octicon-git-commit class="octicon" width="32px" height="32px"/>
            <octicon-verified class="octicon text-green" width="32px" height="32px"/>
          </div>
        </div>
      </nav>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
  import ScriptModal from "./components/ScriptModal.vue"
  import Vue from "vue"
  import { mapState } from "vuex"

  export default Vue.extend({
    components: {
      ScriptModal,
    },
    data() {
      return {
      }
    },
    computed: {
      sections(): any[] {
        return this.cfg.data ? this.cfg.data : []
      },
      ...mapState({ cfg: "cfg" }),
    },
    created() {
    },
    methods: {
    },
  })
</script>

<style lang="scss">
  // https://www.unpkg.com/@github/details-dialog-element@3.0.12/index.css - is for a webcomponent
  .details-dialog {
    position: fixed;
    margin: 10vh auto;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    max-height: 80vh;
    max-width: 90vw;
    width: 448px;
  }

  // https://github.githubassets.com/app/app/assets/stylesheets/components/box-overlay.scss - not in @primer/css yet
  .Box--overlay {
    width: 448px;
    margin-right: auto;
    margin-left: auto;
    background-color: #fff;
    background-clip: padding-box;
    border-color: #444d56;
    box-shadow: 0 0 18px rgba(0,0,0,.4);
  }
  .Box--overlay--narrow { width: 320px; }
  .Box--overlay--wide { width: 640px; }

  @import "~@primer/css/dist/primer";

  .details-overlay-blured[open] > summary::before { backdrop-filter: blur(2px) opacity(0.7); }
  .form-group .form-control.input-block { width: 100%; }
  .outline-none { outline: none; }
</style>

<style lang="scss" scoped>
  .UnderlineNav-actions .octicon { vertical-align: middle; }
</style>

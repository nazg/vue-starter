
<template>
  <div id="app">
    <img class="block mx-auto" src="./assets/logo.png">
    <div class="text-center">
      <router-link class="btn-link" to="/">SampleRoute</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue"

  export default Vue.extend({
    data() {
      return {
      }
    },
    methods: {
    },
  })
</script>

<style lang="scss">
  /* purgecss start ignore */
  // @import "@primer/css/core/index.scss";
  // @import "@primer/css/product/index.scss";
  // @import "@primer/css/marketing/index.scss";
  /* purgecss end ignore */
  @import "@primer/css/buttons/index.scss";
</style>

<style lang="postcss">
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
</style>

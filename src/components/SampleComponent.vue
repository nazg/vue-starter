
<template>
  <p class="p-4 text-center">{{ msg }}</p>
</template>

<script lang="ts">
  import Vue from "vue"

  export default Vue.extend({
    props: {
      msg: { default: "", type: String },
    },
  })
</script>

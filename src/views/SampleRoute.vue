
<template>
  <div>
    <SampleComponent msg="Lorem ipsum dolor sit amet."/>
  </div>
</template>

<script lang="ts">
  import SampleComponent from "src/components/SampleComponent.vue"
  import Vue from "vue"

  export default Vue.extend({
    name: "SampleRoute",
    components: { SampleComponent },
  })
</script>

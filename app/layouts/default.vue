<template>
  <div>
    <Svgs />
    <nuxt />
  </div>
</template>

<script>
import Svgs from '@/components/Svgs.vue'

export default {
  components: {
    Svgs,
  },
}
</script>

<style lang="scss">
  html {
    background-color: #EBEDF4;
  }
</style>

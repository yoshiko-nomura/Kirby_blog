<template>
  <div>
    <HeaderDefault />
    <nuxt />
  </div>
</template>

<script>
import HeaderDefault from '@/components/templates/header/HeaderDefault.vue'

export default {
  components: {
    HeaderDefault,
  },
}
</script>

<style lang="scss">
  html {
    background-color: #EBEDF4;
  }
</style>

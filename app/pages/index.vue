<template>
  <div class="page">
    <div class="container">
      <SideNav :links="links" />
      <div class="page-containt">
        <nuxt-child />
      </div>
    </div>
  </div>
</template>


<script>
import SideNav from '@/components/templates/sideNav/SideNav'

export default {
  components: {
    SideNav,
  },
  data() {
    return {
      links: [
        {
          url: '/html-css',
          text: 'Getting Started',
        },
        {
          url: '/vuejs',
          text: 'Vue.js',
        },
        {
          url: '/nuxtjs',
          text: 'Nuxt.js',
        },
      ],
    }
  },
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .page {
    .container {
      width: 913px;
      margin: auto;
      // margin-top: 38px;
      // margin-bottom: 43px;
    }
  }
</style>

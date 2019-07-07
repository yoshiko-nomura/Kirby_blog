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
          url: '/nuxtjs',
          text: 'top',
        },
        {
          url: '/nuxtjs/section1',
          text: 'Section1',
        },
        {
          url: '/nuxtjs/section2',
          text: 'Section2',
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
      display: flex;
      justify-content: space-between;
      width: 913px;
      margin: auto;
      // margin-top: 38px;
      // margin-bottom: 43px;
    }
  }
</style>
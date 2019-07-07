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
          text: 'Top',
        },
        {
          url: '/html-css/section1',
          text: 'Section1',
          links: [
            {
              url: '/html-css/section1/class1',
              text: 'class1',
            },
            {
              url: '/html-css/section1/class2',
              text: 'class2',
            },
            {
              url: '/html-css/section1/class3',
              text: 'class3',
            },
          ],
        },
        {
          url: '/html-css/section2',
          text: 'Section2',
          links: [
            {
              url: '/html-css/section2/class1',
              text: 'class1',
            },
            {
              url: '/html-css/section2/class2',
              text: 'class2',
            },
            {
              url: '/html-css/section2/class3',
              text: 'class3',
            },
          ],
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

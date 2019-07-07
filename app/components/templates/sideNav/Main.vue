<template>
  <div class="sidenav">
    <nav>
      <ul>
        <li 
          v-for="(link, i) in links"
          :key="i"
        >
          <div class="menu">
            <button @click="active = !active">
              <img
                src="/img/Ellipse.svg"
                alt=""
              >
            </button>
            <nuxt-link 
              :to="link.url"
            >
              {{ link.text }}
            </nuxt-link>
          </div>
          <ul
            v-show="active"
          >
            <li 
              v-for="(links, i) in link.links"
              :key="i">
                <nuxt-link :to="links.url">
                  {{ links.text }}
                </nuxt-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>



<script>
import VueTypes from 'vue-types'
// import Main from '@/components/templates/sideNav/Main'

export default {
  components: {
  },
  props: {
    links: VueTypes.arrayOf(VueTypes.shape({
      url: VueTypes.string.isRequired,
      text: VueTypes.string.isRequired,
      links: VueTypes.arrayOf(VueTypes.shape({
        url: VueTypes.string.isRequired,
        text: VueTypes.string.isRequired,
      })),
    })).isRequired,
  },
  //  links: VueTypes.arrayOf(VueTypes.shape({
  //     url: VueTypes.string.isRequired,
  //     text: VueTypes.string.isRequired,
  //   })),
  //   ※検索の仕方を覚える
  //   https://qiita.com/wintyo/items/862cd4f08295f1a31d17
  // props: {
  //   links: {
  //     type: Array,
  //     required: true,
  //     links: VueTypes.Array.isRequired,
  // ↓これをVueTypesで書く時のテンプレコピペ、ここから編集したのが↑
  //     arrObj: VueType.arrayOf(VueType.shape({
  //     num: VueType.number.isRequired,
  //     text: VueType.string.isRequired
  //   })).isRequired
  //   },
  // },
  // data() {
  //   return {
  //     links: [
  //       {
  //         url: '/html-css',
  //         text: 'Getting Started',
  //       },
  //       {
  //         url: '/vuejs',
  //         text: 'Vue.js',
  //       },
  //       {
  //         url: '/nuxtjs',
  //         text: 'Nuxt.js',
  //       },
  //     ],
  //   }
  // },
  data: function () {
    return {
      active: false,
    }
  },
  computed: {
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
  .sidenav {
    nav {
      width: 249px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 40px;
    }
    
    ul {
      margin-left: 14px;
      padding-top: 56px;
    }

    li {
      padding-bottom: 36px;
    }

    .menu {
      display: flex;
      align-items: center;
      width: 249px;
    }

    img {
      margin-right: 8px;
    }

    button {
      padding: 0;
      border: none;
      background: transparent;
    }

    button img {
      display: block;
    }
  }
</style>
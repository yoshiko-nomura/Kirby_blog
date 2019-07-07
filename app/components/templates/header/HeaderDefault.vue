<template>
  <header class="header">
    <div class="container">
      <h1>Kirby Blog</h1>
      <nav>
        <ul>
          <li
            v-for="(link, i) in links"
            :key="i"
          >
            <!-- Headerのlinkは各項目で各ページに飛ばしたい
          それが複数あるためv-forを使う -->
            <!-- 繰り返しをしたいって処理だけで、何を、の部分が⬇︎
          linksっていう複数データのうちの１つをlinkと名付けてそれを繰り返したい
          linkのi＝indexで0番から番号をふりたいけど
          インデックスをふるよっていう属性をlinksにつけるのかlinkにつけるのか
          linkになるので（link, i） -->
            <nuxt-link :to="link.url">
              {{ link.text }}
            </nuxt-link>
            <!-- 繰り返すものはこれ
            :to="" → :で""の中がテキストではなくdataバインドしたものになる
            linksすべてのurlを繰り返すのではなく
            link１つを繰り返すため
            link.urlやlink.textとなる -->
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
// Headerの固定はlayoutでやる

<script>
export default {
  components: {
  },
  data() {
    return {
      links: [
        {
          url: '/html-css',
          text: 'HTML / CSS',
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
  .header {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 913px;
      margin: auto;
      background-color: rgba(255,255,255,0.5);
      border-radius: 40px;
      margin-top: 38px;
      margin-bottom: 43px;
    }

    h1 {
      margin-left: 46px;
    }

    ul {
      display: flex;
      margin-top: 15px;
    }

    li {
      margin-right: 58px;
    }

    li:last-child {
      margin-right: 41px;
    }
  }
</style>

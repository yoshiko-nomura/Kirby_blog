<template>
  <div class="page">
    <Article 
      :title="title"
      :img="img"
      :code="code"
      :description="description"
    />
  </div>
</template>

<script>
import Article from '@/components/templates/article/Article.vue'
export default {
  components: {
    Article,
  },
  data() {
    return {
      title: "Vue Top",
      img: "/img/return.png",
      code: '<script src="https://cdn.jsdelivr.net/npm/vue"><\/script>\n' +
        '<div id="app">\n' +
        '  <p>{{ sayHello() }}　関数実行するからtitle上書きされるよ</p>\n' +
        '  <p>{{ title }}　もし上のsayhello()書かなければ関数実行されないので、\n\tここは上書きされないよ！</p>\n' +
        '  <p><a v-bind:href="link">google</a></p>\n' +
        '</div>\n' +
        '\n' +
        '<div id="app">\n' +
        '  <p>{{ sayHello() }}　関数実行するからtitle上書きされるよ</p>\n' +
        '  <p>{{ title }}　もし上のsayhello()書かなければ関数実行されないので、\n\tここは上書きされないよ！</p>\n' +
        '  <p><a v-bind:href="link">google</a></p>\n' +
        '</div>\n',
      description: "説明文",
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
    width: 644px;
    background-color: rgba(255,255,255,0.5);
    border-radius: 40px;
  }
</style>
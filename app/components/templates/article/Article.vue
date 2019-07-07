<template>
  <div class="article">
    <div class="container">
      <div class="title">
        <img
          class="icon"
          src="/img/Ellipse2.svg"
          alt=""
        >
        <h2>{{ title }}</h2>
      </div>
      <div class="box">
        <img
          :src="img"
        >
        <!-- バインドするための:なので後ろの文字は元のタグのままでok -->
      </div>
      <div class="box">
        <pre>
          <code>
{{ code }}
          </code>
        </pre>
      </div>

      <div class="description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
export default {
  components: {
  },
  props: {
    title: VueTypes.string.isRequired,
    img: VueTypes.string.isRequired,
    code: VueTypes.string.isRequired,
    description: VueTypes.string.isRequired,
  },
  // 親でpropsっていうデータを入れる箱を作る
  // データのtypeとrequiredだけ指定
  // 子でdataに何を入れるか記載し、バインドすればOK
  computed: {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
  .article {
    .container {
      width: 564px;
      margin: auto;
      padding-bottom: 51px;
    }

    .title {
      display: flex;
      padding-top: 50px;
      margin-bottom: 42px;
    }

    .icon {
      margin-right: 12px;
    }

    .box {
      margin: auto;
      width: 564px;
      margin-bottom: 40px;
      background-color: gray;
    }

    .box img {
      width: 100%;
    }


  }
</style>
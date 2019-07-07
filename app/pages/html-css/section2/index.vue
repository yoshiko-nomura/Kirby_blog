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
      title: "Section2",
      img: "/img/return.png",
      code: 
      "ここに\n" +
      "コード",
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

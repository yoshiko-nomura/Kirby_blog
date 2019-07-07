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
      title: "Section1/class1",
      img: "/img/return.png",
      code: 
      "ここに\n" +
      "コードが入るよ" ,
      description: "説明文が入るよ",
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
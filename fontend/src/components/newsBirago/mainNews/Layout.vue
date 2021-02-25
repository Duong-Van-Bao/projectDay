<template>
    <div>
      <main-news/>
      <next-page/>
    </div>
</template>

<script>
 import mainNews from './index.vue'
 import nextPage from './NextPage.vue'
    export default {
        components:{
            'main-news':mainNews,
            'next-page':nextPage
        }
    }
</script>

<style lang="less">

</style>
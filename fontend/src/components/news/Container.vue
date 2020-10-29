<template>
  <main id="site-content" class="site-content tw-relative tw-flex-1 tw-z-10">
    <new-header/> 
    <new-content/>
    <content-footer/>
  </main>
</template>

<script>
import Header from './container/Header.vue'
import Content from './container/Content.vue'
import Footer from './container/contents/Footer.vue'
export default {
    components: {
      'new-header':Header,
      'new-content':Content,
      'content-footer':Footer
    }
};
</script>

<style lang="css">
</style>
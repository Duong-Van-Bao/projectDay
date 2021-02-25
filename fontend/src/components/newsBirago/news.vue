<template>
  <div >
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <h2>News</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </div>

    <section class="news-area ptb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <main-news/>
          </div>
          <div class="col-lg-4">
            <aside class="widget-area">
             <news-sidebar/>
              </aside>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Main from './mainNews/Layout'
import newsLeftSidebar from './newsLeftSidebar/LayoutOther.vue'
export default {
   data(){
     return{
         
     }    
   },
    methods:{
        
    },
    components:{
       'main-news' :Main,
        'news-sidebar':newsLeftSidebar
    }
}
</script>

<style lang="less">

</style>
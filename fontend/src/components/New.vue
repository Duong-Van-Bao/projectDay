<template>
    <div id="site" class="site tw-flex tw-flex-col tw-h-full tw-relative tw-transition-duration-200">
        <new-menuinfo-one/>
        <new-container/>
        <new-footer/>
    </div>
</template>

<script>
import $ from 'jquery'
import NewsInfo from './news/NewsInfo.vue'
import Container from './news/Container.vue'
import Footer from './news/container/Footer.vue'
    export default {
        components: {
           'new-menuinfo-one':NewsInfo,
           'new-container':Container,
            'new-footer':Footer
        }
    }
    $(document).ready(function(){
        $(window).scroll(function () { 
            var pos_body = $('html,body').scrollTop();
            // console.log(pos_body);
            if(pos_body > 20){
                $('.header').addClass('header-fixed');
            }else {
                $('.header').removeClass('header-fixed');
            }
        });
})
</script>

<style lang="css">
@import url('./news/news.css');
@import url('./news/main.css');
@import url('./news/basic.css');
@import url('./news/responsive.css');
@import url('./news/news5.css');
@import url('./news/news6.css');
@import url('./news/news7.css');
@import url('./news/news8.css');
</style>
<template>
    <div id="site" class="site tw-flex tw-flex-col tw-h-full tw-relative tw-transition-duration-200">
        <new-menuinfo-one/>
        <new-container/>
        <new-footer/>
        <function-jquery/>
    </div>
</template>

<script>
import $ from 'jquery'
import NewsInfo from './news/NewsInfo.vue'
import Container from './news/Container.vue'
import Footer from './news/container/Footer.vue'
import FunctionJquery from './news/FunctionJquery.vue'
    export default {
        components: {
           'new-menuinfo-one':NewsInfo,
           'new-container':Container,
            'new-footer':Footer,
            'function-jquery':FunctionJquery
        }
    }

$(document).ready(function(){
    $(window).scroll(function () { 
        var pos_body = $('html,body').scrollTop();
        // console.log(pos_body);
        if(pos_body < 100){
            $('.scroll-to-top').addClass('tw-opacity-0 tw-pointer-events-none');
        }else {
            $('.scroll-to-top').removeClass('tw-opacity-0 tw-pointer-events-none');
        }
    });
    $('.scroll-to-top').click(function(){
        $('html,body').animate({
            scrollTop:0},
            2500);
        })
})
// initScrollToTop: function initScrollToTop() {
// var $button = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.scroll-to-top');
// jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).scroll(function () {
//     var offset = jquery__WEBPACK_IMPORTED_MODULE_1___default()('body').innerHeight() * 0.25;
//     if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop() > offset) {
//     $button.removeClass('tw-opacity-0 tw-pointer-events-none');
//     } else {
//     $button.addClass('tw-opacity-0 tw-pointer-events-none');
//     }
// });
// $button.on('click', function (e) {
//     jquery__WEBPACK_IMPORTED_MODULE_1___default()('body, html').animate({
//     scrollTop: 0
//     }, 400);
//     e.preventDefault();
// });
// }
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
.lg_tw-mb-6{
    margin-bottom: 3.5rem;
}
</style>
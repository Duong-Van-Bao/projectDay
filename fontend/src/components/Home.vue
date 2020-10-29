<template>
    <div>
    <!-- Start preloader -->
       <start-preloader/>
    <!-- End preloader -->    
        <div class="main">
            <!-- Header start -->
            <header-info/>
            <!-- Header end -->

            <!-- Banner start -->
            <home-content/>
            <!-- Banner end -->

            <!-- About section start -->        
            <container-about/>
            <!-- About section end -->        
            
            <!-- Site Services Block Start -->
            <container-Services/>
            <!-- Site Services Block End -->
            
            <!-- Tokensale section start -->
            <container-toKetsale/>
            <!-- Tokensale section end -->

            <!-- Roadmap section start -->
            <container-roadMap/>
            <!-- Roadmap section end -->        

            <!-- Roadmap section start -->
            <container-team/>
            <!-- Roadmap section end -->        

            <!-- FAQ section strat -->
            <container-faqs/>
            <!-- FAQ section end -->

            <!-- Contact section start -->
            <container-contact/>
            <!-- Contact section end --> 

            <!-- Footer section start -->
            <container-footer/>       
            <!-- Footer section end -->
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import Header from './home/header/Header.vue'
import Content from './home/conatiner/Content'
import About from './home/conatiner/About'
import Services from './home/conatiner/Services'
import ToKetSale from './home/conatiner/ToKetSale'
import RoadMap from './home/conatiner/RoadMap'
import Team from './home/conatiner/Team'
import FaQS from './home/conatiner/FaQS'
import Contact from './home/conatiner/Contact'
import Footer from './home/footer/Footer'
import Startpreloader from './home/Startpreloader/Startpreloader'

export default {
    methods: {
        
    },
    components: {
        
        "header-info":Header,
        "home-content":Content,
        'container-about':About,
        'container-Services':Services,
        'container-toKetsale':ToKetSale,
        'container-roadMap':RoadMap,
        'container-team':Team,
        'container-faqs':FaQS,
        'container-contact':Contact,
        'container-footer':Footer,
        'start-preloader':Startpreloader
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
$(window).on("load", function() {
  "use strict";
    /* -------- preloader ------- */
    $('#preloader').delay(2000).fadeOut(500);
    /*------End----------*/
    $(".token-graph").addClass("token-graph-right");
});
</script>

<style lang="css">
    @import './home/header/css/animate.css';
    @import './home/header/css/cryptoz.css';
    @import './home/header/css/bootstrap.min.css';
    @import './home/header/css/jquery.listtopie.css';
    @import './home/header/css/owl.carousel.css';
    @import './home/header/css/responsive.css';
    /* @import './home/header/css/font-awesome.min.css'; */
</style>

<style lang="less">
img{
    border: none !important;
}
</style>
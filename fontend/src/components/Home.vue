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

            <!-- Our Team section strat -->
                  <container-team/>
            <!-- Our Team section end -->     

            <!-- FAQ section strat -->
            <container-faqs/>
            <!-- FAQ section end -->

            <!-- Contact section start -->
            <container-contact/>
            <!-- Contact section end --> 

            <!-- Footer section start -->
            <container-footer/>       
            <!-- Footer section end -->          
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <button style="background:red;width:300px;height:300px">hay</button>
                        <ul class="dropdown-group">
                            <li class="dropdown-item">home</li>
                            <li class="dropdown-item">About</li>
                            <li class="dropdown-item">Contact</li>
                            <li class="dropdown-item">Serive</li>
                        </ul>
                    </div>
                </div>
            </div>
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
        // var roadmap_box1 = $('.road_map-item').offset().top;
        // console.log(roadmap_box1);
        console.log(pos_body);
        if(pos_body > 20){
            $('.header').addClass('header-fixed');
        }else {
            $('.header').removeClass('header-fixed');
        }
        if(pos_body > 2490){
            $('.road_map-item').addClass('andi')              
        }else{
            $('.road_map-item').removeClass('andi');
        }
        if(pos_body > 450){
            $('.road_map-item').addClass('andi')              
        }else{
            $('.road_map-item').removeClass('andi');
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

$( ".container .row .col-6 button" ).click(function() {
  $( ".container .row .col-6 .dropdown-group " ).toggle("slow");
});
</script>

<style lang="css">
    @import './home/header/css/animate.css';
    @import './home/header/css/cryptoz.css';
    @import './home/header/css/bootstrap.min.css';
    @import './home/header/css/jquery.listtopie.css';
    @import './home/header/css/owl.carousel.css';
    @import './home/header/css/responsive.css';
    /* @import './main.less'; */
    /* @import './home/header/css/font-awesome.min.css'; */
</style>

<style lang="less">
@keyframes example1 {
  from   {left:-800px;}
  to  {left:0px;}
}

@import './homeless.less';
img{
    border: none !important;
}
.andi{
    position: relative;
    animation-name: example1;
    animation-duration: 4s;
    animation-delay: 2s;
}

</style>

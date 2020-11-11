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

            <div id="chart">
                <apexchart type="candlestick" height="350" :options="chartOptions" :series="series"></apexchart>
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
    data() {
        return {
             series: [{
            data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
              },
              {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
              },
              {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
              },
              {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
              },
              {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
              },
              {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
              },
              {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
              },
              {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
              },
              {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
              },
              {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
              },
              {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
              },
            ]
          }],
          chartOptions: {
            chart: {
              type: 'candlestick',
              height: 350
            },
            title: {
              text: 'CandleStick Chart',
              align: 'left'
            },
            xaxis: {
              type: 'datetime'
            },
            yaxis: {
              tooltip: {
                enabled: true
              }
            }
          },
        }
    },

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

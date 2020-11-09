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

function tokan_graph () {
    var scrollDistance = $(window).scrollTop();
    var scrollDistance1 = $('#tokensale-part').offset().top - 100;
    console.log(scrollDistance+'--'+scrollDistance1)
    if ( scrollDistance >= (scrollDistance1 - 100)) {
        $('.donut').listtopie({
            startAngle:270,
            strokeWidth:5,
            hoverEvent:true,
            hoverBorderColor:'#6239d7',
            hoverAnimate:false,
            drawType:'round',
            speedDraw:150,
            hoverColor:'#ffffff',
            textColor:'#3d1f94',
            strokeColor:'#3d1f94',
            textSize:'18',
            // hoverAnimate:true,
            marginCenter:85,
        });
    }
}    

$(window).on('scroll', function(){
    /*index : header animation*/
    if ($(this).scrollTop() > 0) {
        $("header").addClass("header-fixed");
    } else {
        $("header").removeClass("header-fixed");
    }
    /*end index : header animation*/
    tokan_graph();
})

$.fn.viewportChecker = function(useroptions){
    // Define options and extend with user
    var options = {
        classToAdd: 'visible',
        classToRemove : 'invisible',
        classToAddForFullView : 'full-visible',
        removeClassAfterAnimation: false,
        offset: 100,
        repeat: false,
        //invertBottomOffset: true,
        callbackFunction: function(){},
        scrollHorizontal: false,
        scrollBox: window
    };
    $.extend(options, useroptions);

    // Cache the given element and height of the browser
    var $elem = this,
boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};

    /*
        * Main method that checks the elements and adds or removes the class(es)
        */
    this.checkElements = function(){
        var viewportStart, viewportEnd;

        // Set some vars to check with
        if (!options.scrollHorizontal){
            viewportStart = Math.max(
                    $('html').scrollTop(),
                    $('body').scrollTop(),
                    $(window).scrollTop()
                );
            viewportEnd = (viewportStart + boxSize.height);
        }
        else{
            viewportStart = Math.max(
                    $('html').scrollLeft(),
                    $('body').scrollLeft(),
                    $(window).scrollLeft()
                );
            viewportEnd = (viewportStart + boxSize.width);
        }

        // Loop through all given dom elements
        $elem.each(function(){
            var $obj = $(this),
                objOptions = {},
                attrOptions = {};

            //  Get any individual attribution data
            if ($obj.data('vp-add-class'))
                attrOptions.classToAdd = $obj.data('vp-add-class');
            if ($obj.data('vp-remove-class'))
                attrOptions.classToRemove = $obj.data('vp-remove-class');
            if ($obj.data('vp-add-class-full-view'))
                attrOptions.classToAddForFullView = $obj.data('vp-add-class-full-view');
            if ($obj.data('vp-keep-add-class'))
                attrOptions.removeClassAfterAnimation = $obj.data('vp-remove-after-animation');
            if ($obj.data('vp-offset'))
                attrOptions.offset = $obj.data('vp-offset');
            if ($obj.data('vp-repeat'))
                attrOptions.repeat = $obj.data('vp-repeat');
            if ($obj.data('vp-scrollHorizontal'))
                attrOptions.scrollHorizontal = $obj.data('vp-scrollHorizontal');
            if ($obj.data('vp-invertBottomOffset'))
                attrOptions.scrollHorizontal = $obj.data('vp-invertBottomOffset');

            // Extend objOptions with data attributes and default options
            $.extend(objOptions, options);
            $.extend(objOptions, attrOptions);

            // If class already exists; quit
            if ($obj.data('vp-animated') && !objOptions.repeat){
                return;
            }

            // Check if the offset is percentage based
            if (String(objOptions.offset).indexOf("%") > 0)
                objOptions.offset = (parseInt(objOptions.offset) / 100) * boxSize.height;

            // Get the raw start and end positions
            var rawStart = (!objOptions.scrollHorizontal) ? $obj.offset().top : $obj.offset().left,
                rawEnd = (!objOptions.scrollHorizontal) ? rawStart + $obj.height() : rawStart + $obj.width();

            // Add the defined offset
            var elemStart = Math.round( rawStart ) + objOptions.offset,
                elemEnd = (!objOptions.scrollHorizontal) ? elemStart + $obj.height() : elemStart + $obj.width();

            if (objOptions.invertBottomOffset)
                elemEnd -= (objOptions.offset * 2);

            // Add class if in viewport
            if ((elemStart < viewportEnd) && (elemEnd > viewportStart)){

                // Remove class
                $obj.removeClass(objOptions.classToRemove);
                $obj.addClass(objOptions.classToAdd);

                // Do the callback function. Callback wil send the jQuery object as parameter
                objOptions.callbackFunction($obj, "add");

                // Check if full element is in view
                if (rawEnd <= viewportEnd && rawStart >= viewportStart)
                    $obj.addClass(objOptions.classToAddForFullView);
                else
                    $obj.removeClass(objOptions.classToAddForFullView);

                // Set element as already animated
                $obj.data('vp-animated', true);

                if (objOptions.removeClassAfterAnimation) {
                    $obj.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $obj.removeClass(objOptions.classToAdd);
                    });
                }

            // Remove class if not in viewport and repeat is true
            } else if ($obj.hasClass(objOptions.classToAdd) && (objOptions.repeat)){
                $obj.removeClass(objOptions.classToAdd + " " + objOptions.classToAddForFullView);

                // Do the callback function.
                objOptions.callbackFunction($obj, "remove");

                // Remove already-animated-flag
                $obj.data('vp-animated', false);
            }
        });

    };

    // Select the correct events
    if( 'ontouchstart' in window || 'onmsgesturechange' in window ){
        // Device with touchscreen
        $(document).bind("touchmove MSPointerMove pointermove", this.checkElements);
    }

    // Always load on window load
    $(options.scrollBox).bind("load scroll", this.checkElements);

    // On resize change the height var
    $(window).resize(function(){
        boxSize = {height: $(options.scrollBox).height(), width: $(options.scrollBox).width()};
        $elem.checkElements();
    });

    // trigger inital check if elements already visible
    this.checkElements();

    // Default jquery plugin behaviour
    return this;
};
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
@import './homeless.less';
img{
    border: none !important;
}
</style>

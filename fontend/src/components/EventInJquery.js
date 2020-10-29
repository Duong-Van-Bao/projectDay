import $ from 'jquery'

$(document).ready(function(){
    $(window).scroll(function () { 
        if(pos_bod>20){
            $('.menu').addClass('sticky');
        }else{
            $('.menu').removeClass('sticky');
        }     
    });
})
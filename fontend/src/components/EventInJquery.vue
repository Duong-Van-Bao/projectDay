<template>
<div class="container">
    <div>
        <ul class="menu">
            <li>Trang chủ</li>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
        </ul>
        <div class="container">
            <img class="img1" src="https://64.media.tumblr.com/8557efab510c5fde895b13e7ec0b9a02/a18bea4e7acd8b18-b0/s1280x1920/fde6d88a3e7293d333eb485f7e0cfb2ccc5fef88.jpg" alt="hot girl">
            <img class="img2" src="https://64.media.tumblr.com/a22dda63a0e8494c72014ba494697cad/3107f3becb2c1c93-84/s1280x1920/63adcda31e4e6c9a9c99d2a99d848838ee398f2c.jpg" alt="hot girl">
            <img class="img33" src="https://64.media.tumblr.com/023b3f8c53c3c42b68de422961b083cc/tumblr_oq057uTo5H1qbd81ro1_1280.jpg" alt="hot girl">
        </div>
        <div class="back-to-top">
            <i class="fas fa-angle-up"></i>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import 'animate.css';

  export default {
      data() {
          return {
              
          }
      },
      methods: {
      },
    }
    $(document).ready(function(){
        $(window).scroll(function () { 
            var pos_body = $('html,body').scrollTop();
            var roadmap_box1 = $('.img33').offset().top;
            console.log(roadmap_box1);
            console.log(pos_body);
            if(pos_body > 20){
               $('.menu').addClass('sticky');
            }else {
               $('.menu').removeClass('sticky');
            }
            if(pos_body < 500){
               $('.back-to-top').addClass('hien-thi');
            }else {
               $('.back-to-top').removeClass('hien-thi');
            }
            if(pos_body > 2000){
            $('.img33').addClass('andi')              
            }else{
            $('.img33').removeClass('andi');
            }
        });
        $('.back-to-top').click(function(){
            $('html,body').animate({
                scrollTop:0},
                3000);
            })
    })
</script>

<style lang="less">

@keyframes example1 {
  from   {left:-800px;}
  to  {left:0px;}
}
.container{
      div{
      height: 60px;
      .menu{
         display: flex;
         justify-content: center;
         height: 100%;
         align-items: center;
         li{
             margin-left: 20px;
             color:#47ccff;
         }
      }
      .container{
          img{
            margin: 20px 0px;
            width: 100%;
           }
      }
     .back-to-top{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        background: #87d7ef;
        position: fixed;
        bottom: 10px;
        left: 50%;
        cursor: pointer;
        border-radius: 5px;
      }
     .sticky{
        position: fixed;
        top: 19px;
        left: 0px;
        width: 100%;
        height: auto;
        z-index: 10000;
        background: white;
        box-shadow: 2px 5px 5px rgba(0, 0, 0, 0.5);
     }
     .hien-thi{
       display: none;
     }
     .andi{
        position: relative;
        animation-name: example1;
        animation-duration: 4s;
        animation-delay: 2s;
        }
  }
}
</style>
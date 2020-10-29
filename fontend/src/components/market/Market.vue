 <template>
   <div class="mainContent">
       <div class="boxContent">
           <div class="deskTopSection">
              <div class="bgBanner">
                  <div class="centent">
                     <div class="position-relative d-flex">
                        <div class="contentLeft">
                          <div class="d-flex flex-column justify-content-center">
                              <div class="d-flex">
                                 <img  alt="imager-cup" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA8CAYAAADc1RI2AAAABHNCSVQICAgIfAhkiAAABCdJREFUaEPtWjFuU0EQfc8UdOAEAiXkBCQdSgNpaAknIJyA+ATgEzg+AeQE0CMRUiBEhXMCQpkUcaADpAx6Ztf8fPvb3v1rJw5/JMuW/u7svn0zszPjTzMzXG7Z438FkiSLCDWzhwB2AeyR1O9zFU/MxHsOnlCBnA3BwcQET6iYrJhMdgLB1hc8oTLXZGSNVBRMTPCEOWXyAMAdAMsk9XtA5jQZ2ALQAtBWWvcWwGMAT0jq92UBuQ3gOYCGQL4E8ALADsnNSwTSW+i6QN4F0AFwHcA6yQ95oPNmrhni9kmu9JJyM/P2K/QCesY35wlkZq+Ctkqy0688zEwMPgBwAuAlybZndB5AmlnduZ0IkzRJyhWRBalBr10Q0jOZsBjVt0xa/nqhSi2R4QCp/FsBIAySBkkFnp4M1JBmtuHAykfzctFA5ve3LzJkotkHowplnYwY9N9PLyCTTQdGrtYhKVcbkEKQ2ZHz4JPDwBWa67DBZiY2v7jTWh2lcNrP3JX3FcA3krK0sTIRk9IySY47drUEA2KsqgKZ80tFrHujctwERI1VYWY+J22T9HfiyHkhTAYrH7vjiAFmptigGDE0BY2Ors4nffA5ILkcsb/SUzJB5ztJf/GP1Tsxkw6o7qHCRH7saiUHZEy1sGIqxaQD2U/kZ81mhkVtpbDALw3SAfV12pn8sCRJY6eb2RsASjmDWJTiIHN1IJWov3LVipz/TJ44drcRA8zMr/ldQaeoTVOkOhikA6pqRbmsWFXNNjRnjMAzMCVXHz4jqbWDJAqkA+rvTX2L0eRAXTqpf9MUSfv1YRDCGHP1C7giVdm/EgQBTGq6GRPVksF+mD2IaCYdmzphdfiGdhRCTzyjU401n81MnNkk9cm8MjPzPqpH8lO1T3ZCQDrLUAtR4PxFH+WD+XVLMZlV5gKEwKpRLZEJi2V91DUbaFw7n5O562rQx8ueq/CHNrtDDk9jk4HM+KrCvXovHmx+Tz8AXCvYqMDJCgbaoqHAkvnkqIVdhuIZUnE7DLR6MmKrx/g0IvRUmCwCbmYfAawBeETyXRlmQucmN9cJQK6R/BS60TLjK5BlTm/INePNtWIy5cF6XZW5pjzVTHStzDXlwZ6Hub4HcN9VK5+nAaZI58x8cpag8mtVIGNO/2ar+7DG06cAN/ivZJpE1cEp7O1vq7VPGgtJqo/kPllvde9epanBVfql31PY9m+rNU8aC0laKknMdanVXSFtN5C5kewa0PllXE8BtDTIaQDs16aJgJYGeat13CF7zaypiJk1jxo3/AsQUWuUArnU6m7W/vrhVOWncblMMCoF8nbr+APY69RNV4yNw8ZC/5WV0MWiQdZb3fpVWjd0wZjxCkJHW4vR7ypEg9R9eIWm7vZM5HBrMXqv0RMVVWvo/bU9EzlsLEbfv38AyFyAsdSZp9gAAAAASUVORK5CYII="> 
                              </div>
                              <div class="titleChallenge text-capitalize">
                                   Giải Đấu
                              </div>
                              <div class="shortDesc">
                                 Tham gia những giải thưởng lớn.
                              </div>
                          </div>
                        </div>
                        <top-mon/>
                     </div>
                  </div>
                  <div class="w-100 overflow-hidden">
                      <div class="controlPanel">
                         <div class="btnShowSlider">
                              <i class="fa fa-angle-double-left"></i>
                         </div>
                      </div>   
                  </div> 
              </div>    
              <arena-market></arena-market>
           </div>
       </div>
   </div>
</template>
<script>
import ArenaMarket from './ArenaMarket.vue'
import TopMon from './TopMon.vue'
export default {
   components: {
      "arena-market":ArenaMarket,
         "top-mon"   :TopMon
   }
}
</script>

<style lang="css">
    :root{
      --text-color:#ffffff;
      --text-color-fight:#23D1B0;
    }
   .mainContent{
    margin-left: 100px;
    margin-top: 100px;
   }
   .mainContent .deskTopSection .bgBanner{
    background-image: linear-gradient(0, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../../assets/bannerDeskTop.jpg);
    width: 100%;
    height: 484px;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 110px;
    padding-bottom: 110px;
    padding-left: 93px;
    position: relative;
    transition: all 0.3s linear 0s;
   }
   .mainContent .deskTopSection .bgBanner .overflow-hidden{
      overflow: hidden;
   }
   .mainContent .deskTopSection .bgBanner .overflow-hidden .controlPanel .btnShowSlider{
    position: absolute;
    height: 20px;
    left: unset !important;
    right: 50px !important;
    bottom: 100px !important;
    transition: all 0.5s linear;
    transform: rotate(-360deg);
    z-index: 101;
    cursor: pointer;
   }
   .mainContent .deskTopSection .bgBanner .overflow-hidden .controlPanel .btnShowSlider i{
    width: 30px;
    height: 30px;
    color: var(--text-color);
    border: 1px solid var(--text-color);
    border-radius: 50%;
    line-height: 1.69;
   }
   .mainContent .deskTopSection .bgBanner .overflow-hidden .controlPanel .btnShowSlider:hover{
    transform: rotate(-180deg);  
   }
   .mainContent .deskTopSection .bgBanner .centent{
    position: relative;
    width: 100%;
    height: 280px;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative{
      height: 100%;
   }
  .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft{
    height: 100%;
    z-index: 1;
    transition: all 0.3s linear 0s;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft .justify-content-center{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    height: 100%;
    justify-content: center;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft .d-flex .titleChallenge{
      font-size: 56px;
      font-weight: bold;
      line-height: 1.3;
      text-align:start;
      color: var(--text-color-fight);
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft .d-flex .shortDesc{
    font-size: 25px;
    color: var(--text-color);
    max-width: 480px;
    line-height: normal;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft .d-flex .d-flex img{
    width: 55px;
    height: 59px;
    margin-bottom: 10px;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative .contentLeft .flex-column .d-flex{
    text-align: start;
   }
   .mainContent .deskTopSection .bgBanner .centent .flex-column{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
   }
   .mainContent .deskTopSection .bgBanner .centent .position-relative {
    display: flex;
   }
    .swiper-slide .w4 .boxChallenge .listExpert .expertBox .d-flex .name{
    font-size: 12px;
    color: #fff;
    font-weight: bold;
    margin-bottom: 10px;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .silver{
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    height: 100%;    
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .silver .avatar{
    border-color: #CECECE;
   } 
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .silver .price b{
    color: #CECECE;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .gold{
    position: absolute;
    left: 0;
    top: 5px;
    width: 100%;
    height: 100%;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .gold .avatar{
    border-color: #FEA829;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .gold .price b{
    color: #FEA829;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .bronze{
    position: absolute;
    left: 0;
    top: 30px;
    width: 100%;
    height: 100%;
   }
   .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .bronze .avatar{
    border-color: #915700;
   }
  .swiper-wrapper .swiper-slide .w4 .boxChallenge .listExpert .expertBox .bronze .price b{
    color: #915700;
   }
   .swiper-slide .w4 .boxChallenge .listExpert .expertBox .d-flex .avatar{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid;
   } 
   .swiper-slide .w4 .boxChallenge .listExpert .expertBox .price{
      margin-top: 10px;
      font-size: 1rem;
   }
   .swiper-slide .w4 .boxChallenge .listExpert .expertBox .d-flex .avatar img{
    height: auto;
    max-width: 100%;
    font-style: italic;
    vertical-align: middle;
   }
</style>

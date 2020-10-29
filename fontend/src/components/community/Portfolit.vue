<template>
  <div class="portfolioStats">
    <div class="desktop container">
      <div class="d-flex">
        <img src="../../assets/logo-header.png" alt="logo header" />
        <h1 class="title ml-3">Portfolio Stats</h1>
      </div>
      <div class="mt-5 container-fluid">
        <div class="row">
          <div class="col-4 pl-0">
            <div class="boxContent">
              <p class="nameBox d-flex">
                <!---->
                0%
              </p>
              <span class="mt-3 valueBox">Gain</span>
              <div class="boxImg boxGain"></div>
            </div>
          </div>
          <div class="col-4">
            <div class="boxContent">
              <p class="nameBox">$0</p>
              <span class="mt-3 valueBox">Investment Amount</span>
              <div class="boxImg boxAmount"></div>
            </div>
          </div>
          <div class="col-3 pr-0">
            <div class="boxContent">
              <p class="nameBox">
                <span>$0</span>
              </p>
              <span class="mt-3 valueBox">Current Balance</span>
              <div class="boxImg boxProfit"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@text-color: #fff;
@background: #12013e;
@background-button: #31baa0;

.portfolioStats {
  padding-top: 50px;
  .container {
    background: @background;
    .d-flex {
      img {
        height: 29px;
        max-width: 29px;
        font-style: italic;
        padding-top: 5px;
        vertical-align: middle;
      }
      h1 {
        font-size: 37px;
        font-weight: 700;
        color: @text-color;
        margin-bottom: 0;
      }
    }
    .container-fluid {
      .row {
        .col-4 {
          .boxContent {
            background: #2a1b52;
            padding: 34px;
            border-radius: 13px;
            position: relative;
            .nameBox {
              font-size: 33px;
              font-weight: 700;
              color: @text-color;
            }
            .valueBox {
              font-size: 15px;
              color: #8086b1;
              text-transform: capitalize;
            }
            .boxGain {
              background-image: url(../../assets/card-user.png);
              position: absolute;
              top: 0;
              right: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-repeat: no-repeat;
              background-position: right -8px top 14px;
            }
            .boxGain::before {
              background-image: url(../../assets/line-candlestick.png);
              position: absolute;
              right: 0;
              top: 0;
              transform: translate(-50%, 31%);
              width: 76px;
              height: 76px;
              content: "";
              background-repeat: no-repeat;
              background-size: contain;
            }
          }
        }
      }
    }
  }
}
.container-fluid .row .col-3 .boxContent {
  background: #2a1b52;
  padding: 34px;
  border-radius: 13px;
  position: relative;
}
</style>
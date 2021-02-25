<template>
  <div class="news-birago">
    <div class="top-header-area bg-ffffff">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="breaking-news-content">
              <h6 class="breaking-title">Breaking News:</h6>
              <div class="breaking-news-slides owl-carousel owl-theme">
                <div class="single-breaking-news">
                  <p>
                    <a href="#"
                      >Entertainment activists started again a few months
                      later</a
                    >
                  </p>
                </div>
                <div class="single-breaking-news">
                  <p>
                    <a href="#"
                      >Entertainment activists started again a few months
                      later</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="top-header-others">
              <li>
                <div class="languages-list">
                  <select>
                    <option value="1">English</option>
                    <option value="2">العربيّة</option>
                    <option value="3">Deutsch</option>
                    <option value="3">Português</option>
                    <option value="3">简体中文</option>
                  </select>
                </div>
              </li>
              <li>
                <i class="far fa-user"></i>
                <a href="login.html">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <nav-head />
    <nav-news />
    <section class="footer-area pt-100 pb-70">
      <nav-footer />
    </section>
    <div class="copyright-area">
      <div class="container">
        <div class="copyright-area-content">
          <p>
            Copyright © 2021 Depan. All Rights Reserved by
            <a href="https://envytheme.com/" target="_blank">EnvyTheme</a>
          </p>
        </div>
      </div>
    </div>
    <div class="go-top">
      <i class="fas fa-long-arrow-alt-up"></i>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import navHead from "./block/NavHead.vue";
import Footer from "./block/Footer.vue";
import News from "./News.vue";

export default {
  components: {
    "nav-head": navHead,
    "nav-footer": Footer,
    "nav-news": News,
  },
};
$(document).ready(function () {
  $(window).scroll(function () {
    var pos_body = $("html,body").scrollTop();
    if (pos_body > 20) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
    if (pos_body > 200) {
      $(".go-top").addClass("active");
    } else {
      $(".go-top").removeClass("active");
    }
  });
  $(".go-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      3000
    );
  });
});
</script>

<style lang="less">
/* reset css */
body {
  background: none;
  #app {
    width: 100%;
  }
}
/* end */

  /* birago */
.news-birago {
  .news-area {
      .single-news-item {
        .news-content {
          text-align: left;
        }
      }
      .widget-area {
        .info {
          text-align: left;
          margin-top: 5px;
          overflow: hidden;
        }
      }
    }
    .footer-area {
      .single-footer-widget {
        text-align: left;
        img {
          margin-bottom: 25px;
        }
        .post-content h4 a {
          color: #fff !important;
        }
      }
    }
    #navbarSupportedContent {
      .nav-item:hover {
        background-color: #ff661f;
      }
      .nav-link::after {
        display: none;
      }
    }
    .main-navbar .navbar .navbar-nav .nav-item a i {
      font-size: 11px !important;
      top: 7px !important;
      margin-left: 6px !important;
    }
    #navbarSupportedContent .nav-item:hover {
      background-color: #fff;
    }
    .page-title-area .page-title-content h2 {
      text-align: left;
    }
    .single-news-item:hover .news-content h3 a {
      color: #ff6c27 !important;
    }
    .main-navbar .navbar .navbar-nav .nav-item a {
      display: flex;
    }
}
  /* end */
</style>
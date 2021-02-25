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
    <nav-head/>
    <content-details/>
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
import navHead from "./block/NavHead.vue";
import Footer from "./block/Footer.vue";
import details from "./Details.vue";

export default {
  components: {
    "nav-head": navHead,
    "nav-footer": Footer,
    "content-details": details,
  },
}
</script>

<style lang="less">
  
</style>
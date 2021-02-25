<template>
  <div>
      <latest-news/>
      <section class="widget widget_featured_reports">
        <h3 class="widget-title">Featured reports</h3>
        <div class="single-featured-reports">
          <div class="featured-reports-image">
            <a href="#">
              <img
                src="../../../assets/news/featured-reports/featured-reports-1.jpg"
                alt="image"
              />
            </a>
            <div class="featured-reports-content">
              <h3>
                <a href="#"
                  >All the highlights from western fashion week summer 2021</a
                >
              </h3>
              <p><a href="#">Patricia</a> / 28 September, 2021</p>
            </div>
          </div>
        </div>
      </section>
      <section class="widget widget_stay_connected">
        <h3 class="widget-title">Stay connected</h3>
        <ul class="stay-connected-list">
          <li>
            <a href="#">
              <i class="fab fa-facebook-f"></i>
              120,345 Fans
            </a>
          </li>
          <li>
            <a href="#" class="twitter">
              <i class="fab fa-twitter"></i>
              25,321 Followers
            </a>
          </li>
          <li>
            <a href="#" class="linkedin">
              <i class="fab fa-linkedin"></i>
              7,519 Connect
            </a>
          </li>
          <li>
            <a href="#" class="youtube">
              <i class="fab fa-youtube"></i>
              101,545 Subscribers
            </a>
          </li>
          <li>
            <a href="#" class="instagram">
              <i class="fab fa-instagram"></i>
              10,129 Followers
            </a>
          </li>
          <li>
            <a href="#" class="wifi">
              <i class="fas fa-wifi"></i>
              952 Subscribers
            </a>
          </li>
        </ul>
      </section>
      <section class="widget widget_newsletter">
        <div class="newsletter-content">
          <h3>Subscribe to our newsletter</h3>
          <p>Subscribe to our newsletter to get the new updates!</p>
        </div>
        <form class="newsletter-form" data-toggle="validator">
          <input
            type="email"
            class="input-newsletter"
            placeholder="Enter your email"
            name="EMAIL"
            required
            autocomplete="off"
          />
          <button type="submit">Subscribe</button>
          <div id="validator-newsletter" class="form-result"></div>
        </form>
      </section>
      <popular-reposts/>
      <section class="widget widget_most_shared">
        <h3 class="widget-title">Most shared</h3>
        <div class="single-most-shared">
          <div class="most-shared-image">
            <a href="#">
              <img
                src="../../../assets/news/most-shared/most-shared-1.jpg"
                alt="image"
              />
            </a>
            <div class="most-shared-content">
              <h3>
                <a href="#"
                  >All the highlights from western fashion week summer 2021</a
                >
              </h3>
              <p><a href="#">Patricia</a> / 28 September, 2021</p>
            </div>
          </div>
        </div>
      </section>
      <section class="widget widget_tag_cloud">
        <h3 class="widget-title">Tags</h3>
        <div class="tagcloud">
          <a href="#">News</a>
          <a href="#">Business</a>
          <a href="#">Health</a>
          <a href="#">Politics</a>
          <a href="#">Magazine</a>
          <a href="#">Sport</a>
          <a href="#">Tech</a>
          <a href="#">Video</a>
          <a href="#">Global</a>
          <a href="#">Culture</a>
          <a href="#">Fashion</a>
        </div>
      </section>
      <section class="widget widget_instagram">
        <h3 class="widget-title">Instagram</h3>
        <ul>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-1.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-2.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-3.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-4.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-5.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
          <li>
            <div class="box">
              <img
                src="../../../assets/news/latest-news/latest-news-6.jpg"
                alt="image"
              />
              <i class="bx bxl-instagram"></i>
              <a href="#" target="_blank" class="link-btn"></a>
            </div>
          </li>
        </ul>
      </section>
  </div>
</template>

<script>
import lastestNews from './latestNews/index.vue'
import popularReposts from './popularReposts/index.vue'
export default {
 components: {
   'latest-news':lastestNews,
   'popular-reposts':popularReposts
 }
};
</script>

<style lang="less">

</style>
<template>
  <div>
    <div class="page-title-area">
      <div class="container">
        <div class="page-title-content">
          <h2>News details</h2>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>News details</li>
          </ul>
        </div>
      </div>
    </div>
    <section class="news-area ptb-50">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <details-news />
          </div>
          <div class="col-lg-4">
            <aside class="widget-area">
              <div class="widget widget_search">
                <form class="search-form">
                  <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input
                      type="search"
                      class="search-field"
                      placeholder="Search..."
                    />
                  </label>
                  <button type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <news-sidebar />
            </aside>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import details from "./details/index.vue";
import newsLeftSidebar from "./newsLeftSidebar/LayoutOther.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    "details-news": details,
    "news-sidebar": newsLeftSidebar,
  },
};
</script>

<style lang="less">

</style>
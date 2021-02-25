<template>
  <div class="blog-details-desc">
      <div class="article-image">
        <img
          src="../../../assets/news/news-details/news-details-1.jpg"
          alt="image"
        />
      </div>
      <div class="article-content">
      <span
        ><a href="#">Patricia</a> / 28 September 2021 /
        <a href="#">0 Comment</a></span
      >
      <h3>
        The Prime Minister’s said that selfish nations are constantly dying for
        their own interests.
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
        omnis iste natus error sit voluptatem accusantium doloremque laudantium,
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione.
      </p>
      <div class="desc-overview">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="desc-image">
              <img
                src="../../../assets/news/news-details/news-details-2.jpg"
                alt="image"
              />
            </div>
          </div>
          <div class="col-lg-6">
            <div class="desc-text">
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h4>Trump discusses various issues with his party’s political leaders</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul class="features-list">
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod.
        </li>
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </ul>
      <h4>Discuss 5 major issues by keeping people together</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <ul class="features-list">
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod.
        </li>
        <li>
          <i class="fas fa-check"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </li>
      </ul>
      <blockquote class="wp-block-quote">
        <p>
          “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.”
        </p>
      </blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
    <div class="article-footer">
      <div class="article-share">
        <ul class="social">
          <li><span>Share:</span></li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="post-navigation">
      <div class="navigation-links">
        <div class="nav-previous">
          <a href="#">
            <i class="bx bx-chevron-left"></i>
            Prev Post
          </a>
        </div>
        <div class="nav-next">
          <a href="#">
            Next Post
            <i class="bx bx-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
    <user-comments/>
  </div>
</template>

<script>
import comments from "./Comments.vue";
export default {
  components: {
    "user-comments": comments,
  },
};
</script>

<style lang="less">
.news-birago .blog-details-desc {
    text-align: left;
}
</style>
<template>
  <div class="comments-area">
    <h3 class="comments-title">3 Comments:</h3>
    <ol class="comment-list">
      <li class="comment">
        <div class="comment-body">
          <footer class="comment-meta">
            <div class="comment-author vcard">
              <img
                src="../../../assets/news/client/client-1.jpg"
                class="avatar"
                alt="image"
              />
              <b class="fn">John Jones</b>
            </div>
            <div class="comment-metadata">
              <a href="index.html">
                <span>April 24, 2021 at 10:59 am</span>
              </a>
            </div>
          </footer>
          <div class="comment-content">
            <p>
              Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen.
            </p>
          </div>
          <div class="reply">
            <a href="#" class="comment-reply-link">Reply</a>
          </div>
        </div>
        <ol class="children">
          <li class="comment">
            <div class="comment-body">
              <footer class="comment-meta">
                <div class="comment-author vcard">
                  <img
                    src="../../../assets/news/client/client-2.jpg"
                    class="avatar"
                    alt="image"
                  />
                  <b class="fn">Steven Smith</b>
                </div>
                <div class="comment-metadata">
                  <a href="index.html">
                    <span>April 24, 2021 at 10:59 am</span>
                  </a>
                </div>
              </footer>
              <div class="comment-content">
                <p>
                  Lorem Ipsum has been the industry’s standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen.
                </p>
              </div>
              <div class="reply">
                <a href="#" class="comment-reply-link">Reply</a>
              </div>
            </div>
          </li>
        </ol>
        <div class="comment-body">
          <footer class="comment-meta">
            <div class="comment-author vcard">
              <img
                src="../../../assets/news/client/client-3.jpg"
                class="avatar"
                alt="image"
              />
              <b class="fn">Sarah Taylor</b>
            </div>
            <div class="comment-metadata">
              <a href="index.html">
                <span>April 24, 2021 at 10:59 am</span>
              </a>
            </div>
          </footer>
          <div class="comment-content">
            <p>
              Lorem Ipsum has been the industry’s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen.
            </p>
          </div>
          <div class="reply">
            <a href="#" class="comment-reply-link">Reply</a>
          </div>
        </div>
      </li>
    </ol>
    <div class="comment-respond">
      <h3 class="comment-reply-title">Leave a Reply</h3>
      <form class="comment-form">
        <p class="comment-notes">
          <span id="email-notes"
            >Your email address will not be published.</span
          >
          Required fields are marked
        </p>
        <p class="comment-form-author">
          <label>Name</label>
          <input
            type="text"
            id="author"
            placeholder="Your Name*"
            name="author"
            required="required"
          />
        </p>
        <p class="comment-form-email">
          <label>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email*"
            name="email"
            required="required"
          />
        </p>
        <p class="comment-form-url">
          <label>Website</label>
          <input type="url" id="url" placeholder="Website" name="url" />
        </p>
        <p class="comment-form-comment">
          <label>Comment</label>
          <textarea
            name="comment"
            id="comment"
            cols="45"
            placeholder="Your Comment..."
            rows="5"
            maxlength="65525"
            required="required"
          ></textarea>
        </p>
        <p class="comment-form-cookies-consent">
          <input
            type="checkbox"
            value="yes"
            name="wp-comment-cookies-consent"
            id="wp-comment-cookies-consent"
          />
          <label for="wp-comment-cookies-consent"
            >Save my name, email, and website in this browser for the next
            time I comment.</label>
        </p>
        <p class="form-submit">
          <input
            type="submit"
            name="submit"
            id="submit"
            class="submit"
            value="Post a comment"
          />
        </p>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less">

</style>
<template>
  <div>
    <a
      href="#top"
      class="scroll-to-top tw-fixed tw-bottom-0 tw-right-0 tw-h-8 tw-w-8 tw-inline-flex tw-items-center tw-justify-center tw-bg-accent tw-text-white hover_tw-text-white tw-text-lg tw-leading-none tw-shadow-lg tw-rounded-full hover_tw-no-underline tw-transition-opacity tw-opacity-0 tw-pointer-events-none hover_tw-opacity-75 tw-mr-4 tw-mb-4 lg_tw-mr-6 lg_tw-mb-6 tw-z-50"
      ><i class="si si-angle-up"></i>
    </a>
    <aside id="drawer" class="drawer tw-fixed tw-inset-0 tw-z-50 tw-invisible">
      <div
        class="drawer-overlay tw-bg-overlay lg_tw-bg-transparent tw-fixed tw-inset-0 tw-opacity-0 tw-transition-opacity tw-transition-duration-200 tw-transition-timing-ease"
      ></div>

      <div
        class="drawer-inner tw-bg-surface tw-fixed tw-left-0 tw-inset-y-0 tw-flex tw-flex-col tw-w-full tw--translate-x-full tw-transition-opacity-transform tw-transition-duration-200 tw-shadow-lg"
      >
        <div
          class="drawer-header tw-flex tw-items-center tw-border-b tw-border-soft tw-h-16 lg_tw-h-20 tw-px-6 md_tw-px-8"
        >
          <div class="site-branding tw-flex-1">
            <h1 class="site-title tw-text-2xl lg_tw-text-3xl tw-mb-0">
              <a href="index.html"></a>
            </h1>
          </div>

          <span
            class="drawer-close tw-cursor-pointer tw-text-soft hover_tw-text-strong hover_tw-no-underline"
          >
            <i class="si si-close"></i>
          </span>
        </div>

        <div
          class="drawer-content tw-flex-1 tw-p-6 md_tw-p-8 tw-overflow-x-hidden tw-overflow-y-auto"
        >
          <div class="tw--mb-6 md_tw--mb-8 lg_tw-hidden">
            <div
              id="nav_menu-3"
              class="widget tw-mb-8 widget_nav_menu tw-clearfix"
            >
              <h3 class="widget-title tw-text-xl tw-mb-5">Wefinex Menu</h3>
              <div class="menu-header-menu-container">
                <ul id="menu-header-menu-2" class="menu">
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-28"
                  >
                    <a href="https://wefinex.net/index">Back to Trade</a>
                  </li>
                  <li
                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-55"
                  >
                    <a href="https://wefinex.net/faqs">Help Centre</a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="text-7" class="widget tw-mb-8 widget_text tw-clearfix">
              <div class="textwidget"></div>
            </div>
            <div
              id="stein_kit_posts-6"
              class="widget tw-mb-8 widget_stein_kit_posts tw-clearfix"
            >
              <h3 class="widget-title tw-text-xl tw-mb-5">Recent Post</h3>
            </div>
          </div>

          <div class="tw--mb-6 md_tw--mb-8 tw-hidden lg_tw-block">
            <div
              id="categories-3"
              class="widget tw-mb-8 widget_categories tw-clearfix"
            >
              <h3 class="widget-title tw-text-xl tw-mb-5">Categories</h3>
              <ul>
                <li class="cat-item cat-item-7">
                  <a href="category/important-notice/index.html"
                    >Important Notice</a
                  >
                </li>
                <li class="cat-item cat-item-5">
                  <a href="category/platform/index.html">Platform</a>
                </li>
                <li class="cat-item cat-item-1">
                  <a href="category/uncategorized/index.html">Uncategorized</a>
                </li>
              </ul>
            </div>
            <div id="text-5" class="widget tw-mb-8 widget_text tw-clearfix">
              <h3 class="widget-title tw-text-xl tw-mb-5">Find Us</h3>
              <div class="textwidget">
                <p>
                  <strong>Address</strong><br />
                  123 Main Street<br />
                  New York, NY 10001
                </p>
                <p>
                  <strong>Hours</strong><br />
                  Monday&mdash;Friday: 9:00AM&ndash;5:00PM<br />
                  Saturday &amp; Sunday: 11:00AM&ndash;3:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div id="search-dialog" class="search-dialog has-mode mode-dark tw-fixed tw-z-50 tw-overflow-hidden tw-inset-0 tw-invisible"
    >
      <div
        class="search-dialog-inner tw-fixed tw-inset-0 tw-flex tw-items-center tw-opacity-0 tw-transition-opacity tw-transition-duration-200 tw-transition-timing-ease"
      >
        <div class="tw-bg-black tw-opacity-95 tw-absolute tw-inset-0"></div>

        <div
          class="tw-container tw-max-w-xl lg_tw-max-w-3xl tw-relative tw-z-10"
        >
          <form
            role="search"
            method="get"
            action="https://news.wefinex.net/"
            class=""
          >
            <input
              type="search"
              class="tw-block tw-w-full tw-bg-transparent tw-text-white tw-border-b-2 tw-border-white tw-px-0 tw-py-2 tw-text-2xl focus_tw-outline-none focus_tw-border-accent tw-mb-2"
              placeholder="Search &hellip;"
              name="s"
              value=""
              autocomplete="off"
            />
            <p class="tw-text-sm tw-text-right tw-font-medium">
              Hit enter to search or ESC to close.
            </p>
          </form>
        </div>

        <span
          class="search-dialog-close tw-cursor-pointer tw-absolute tw-top-0 tw-right-0 tw-mt-4 tw-mr-4 md_tw-mt-6 md_tw-mr-6 hover_tw-text-strong hover_tw-no-underline"
          ><i class="si si-close"></i
        ></span>
      </div>
    </div>
    <!-- <div id="glt-translate-trigger">
      <span class="translate">Press to translate »</span>
    </div> -->
    <div id="glt-toolbar"></div>
    <div id="flags" style="display: none" class="size18">
      <ul id="sortable" class="ui-sortable">
        <li id="Arabic">
          <a
            href="#"
            title="Arabic"
            class="nturl notranslate ar flag Arabic"
          ></a>
        </li>
        <li id="Chinese (Simplified)">
          <a
            href="#"
            title="Chinese (Simplified)"
            class="nturl notranslate zh-CN flag Chinese (Simplified)"
          ></a>
        </li>
        <li id="Dutch">
          <a href="#" title="Dutch" class="nturl notranslate nl flag Dutch"></a>
        </li>
        <li id="Filipino">
          <a
            href="#"
            title="Filipino"
            class="nturl notranslate tl flag Filipino"
          ></a>
        </li>
        <li id="French">
          <a
            href="#"
            title="French"
            class="nturl notranslate fr flag French"
          ></a>
        </li>
        <li id="Japanese">
          <a
            href="#"
            title="Japanese"
            class="nturl notranslate ja flag Japanese"
          ></a>
        </li>
        <li id="Khmer">
          <a href="#" title="Khmer" class="nturl notranslate km flag Khmer"></a>
        </li>
        <li id="Korean">
          <a
            href="#"
            title="Korean"
            class="nturl notranslate ko flag Korean"
          ></a>
        </li>
        <li id="Malayalam">
          <a
            href="#"
            title="Malayalam"
            class="nturl notranslate ml flag Malayalam"
          ></a>
        </li>
        <li id="Malay">
          <a href="#" title="Malay" class="nturl notranslate ms flag Malay"></a>
        </li>
        <li id="Myanmar (Burmese)">
          <a
            href="#"
            title="Myanmar (Burmese)"
            class="nturl notranslate my flag Myanmar (Burmese)"
          ></a>
        </li>
        <li id="Portuguese">
          <a
            href="#"
            title="Portuguese"
            class="nturl notranslate pt flag Portuguese"
          ></a>
        </li>
        <li id="Russian">
          <a
            href="#"
            title="Russian"
            class="nturl notranslate ru flag Russian"
          ></a>
        </li>
        <li id="Spanish">
          <a
            href="#"
            title="Spanish"
            class="nturl notranslate es flag Spanish"
          ></a>
        </li>
        <li id="Thai">
          <a href="#" title="Thai" class="nturl notranslate th flag Thai"></a>
        </li>
        <li id="Vietnamese">
          <a
            href="#"
            title="Vietnamese"
            class="nturl notranslate vi flag Vietnamese"
          ></a>
        </li>
      </ul>
    </div>
    <div id="glt-footer">
      <div id="google_language_translator" class="default-language-en"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
</style>
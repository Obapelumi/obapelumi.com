<template>
  <div id="colorlib-hero" class="js-fullheight">
    <div class="owl-carousel-disabled">
      <div class="item">
        <div class="hero-flex js-fullheight">
          <div class="col-three-forth">
            <div
              class="hero-img js-fullheight"
              style="background-image: url(images/generic-background.jpg);"
            ></div>
          </div>
          <div class="col-one-forth js-fullheight">
            <div class="display-t js-fullheight">
              <div class="display-tc js-fullheight">
                <!-- <h2 class="number">01/03</h2> -->
                <div class="text-inner">
                  <div class="desc">
                    <span class="tag">Welcome</span>
                    <h3 class="main-lead-text">Hi! I'm Emmanuel. I help make things that people might find useful</h3>
                    <p
                      class="main-sub-text"
                    >Really I am a full stack web developer who puts easy solutions on really complex problems.</p>
                    <!-- <p>I code for everyone, from end users, to product owners and ofcourse my fellow super-stressed developerss</p> -->
                    <p>
                      <nuxt-link to="/work" class="btn-view">
                        My Work
                        <i class="icon-arrow-right3"></i>
                      </nuxt-link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="item">
        <div class="hero-flex js-fullheight">
          <div class="col-three-forth">
            <div
              class="hero-img js-fullheight"
              style="background-image: url(images/generic-background.jpg);"
            ></div>
          </div>
          <div class="col-one-forth js-fullheight">
            <h2 class="number">03/03</h2>
            <div class="display-t js-fullheight">
              <div class="display-tc js-fullheight">
                <div class="text-inner">
                  <div class="desc">
                    <span class="tag">Discover</span>
                    <h2>Discover New Things</h2>
                    <p>
                      A small river named Duden flows by their place and supplies it with the
                      necessary regelialia. It is a paradisematic country, in which roasted
                      parts of sentences fly into your mouth.
                    </p>
                    <p>
                      <a href="work.html" class="btn-view">
                        View Galleries
                        <i class="icon-arrow-right3"></i>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import globalMixin from "@/mixins/global";
export default {
  data: () => ({
    homeItems: []
  }),
  mixins: [globalMixin]
};
</script>
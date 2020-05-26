<template>
  <div id="colorlib-about">
    <div class="about-flex js-fullheight">
      <div
        class="col-half js-full-height about-img"
        style="background-image: url(/images/obapelumi.jpg);"
      ></div>
      <div class="col-half">
        <div class="">
          <div class="item">
            <div class="display-t js-fullheight">
              <div class="display-tc js-fullheight">
                <div class="about-desc">
                  <div class="row row-pb-md">
                    <div class="col-md-12">
                      <span class="title">About Me</span>
                      <h2 class="about-head">FullStack Web Developer</h2>
                      <p>
                        <strong
                          >I build scalable enterprise grade web
                          applications</strong
                        >
                      </p>
                      <p>
                        I am a passionate Software developer who is experienced
                        in delivering high-quality cloud technologies with
                        stellar user experiences that empower people and
                        businesses.
                      </p>
                      <p>
                        <nuxt-link to="/work" class="btn-view">
                          My Work
                          <i class="icon-arrow-right3"></i>
                        </nuxt-link>
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <h3>Get in Touch</h3>
                      <p>
                        <a href="mailto:obapelumi.o@gmail.com"
                          >obapelumi.o@gmail.com</a
                        >
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h3>Find Me</h3>
                      <p class="colorlib-social-icons">
                        <a href="https://github.com/obapelumi" target="__blank"
                          ><i class="icon-github"></i
                        ></a>
                        <a
                          href="https://twitter.com/crudecoder"
                          target="__blank"
                          ><i class="icon-twitter2"></i
                        ></a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="item">
            <div class="display-t js-fullheight">
              <div class="display-tc js-fullheight">
                <div class="about-desc">
                  <div class="row row-pb-md">
                    <div class="col-md-12">
                      <span class="title">My Story</span>
                      <h2 class="about-head">History of the Company</h2>
                      <p>
                        <strong
                          >Far far away, behind the word mountains, far from the
                          countries Vokalia and Consonantia, there live the
                          blind texts.</strong
                        >
                      </p>
                      <p>
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="display-t js-fullheight">
              <div class="display-tc js-fullheight">
                <div class="about-desc">
                  <div class="row row-pb-md">
                    <div class="col-md-12">
                      <span class="title">Career</span>
                      <h2 class="about-head">My Career</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <ul>
                        <li>
                          <i class="icon-check"></i> The Big Oxmox advised her
                          not to do so
                        </li>
                        <li>
                          <i class="icon-check"></i> When she reached the first
                          hills of the Italic Mountains
                        </li>
                        <li>
                          <i class="icon-check"></i> Alphabet Village and the
                          subline of her own road
                        </li>
                        <li>
                          <i class="icon-check"></i> Pityful a rethoric question
                          ran over her cheek, then she continued her way.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
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

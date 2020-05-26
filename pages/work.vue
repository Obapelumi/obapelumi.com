<template>
  <div>
    <div id="colorlib-work">
      <div class="container">
        <div class="row text-center">
          <h2 class="bold">Works</h2>
        </div>
        <div class="row">
          <div class="col-md-12" v-for="work in myWorks" :key="work.title">
            <div class="work-entry-flex animate-box js-fullheight">
              <div class="col-three-forth js-fullheight">
                <div class="row no-gutters">
                  <div class="col-md-12 col-md-push-10 no-gutters">
                    <div
                      class="work-img js-fullheight"
                      :style="`background-image: url(${work.imagePath});`"
                    ></div>
                  </div>
                </div>
              </div>
              <div class="col-one-forth js-fullheight">
                <div class="row no-gutters">
                  <div class="col-md-12 col-md-pull-12 no-gutters">
                    <div class="display-t js-fullheight">
                      <div class="display-tc js-fullheight">
                        <div class="text-inner text-inner-right">
                          <h2>
                            <a href="#">{{ work.title }}</a>
                          </h2>
                          <p>{{ work.description }}</p>
                          <p>
                            <!-- <a href="work-single.html" class="btn-view">Learn more</a> -->
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <shared-footer />
  </div>
</template>

<script>
import globalMixin from "@/mixins/global";

export default {
  components: {
    "shared-footer": () => import("@/components/layout/shared-footer")
  },
  data: () => ({
    myWorks: [
      {
        title: "VAMP Facilities Intelligence",
        description:
          "VAMP Facilities Intelligence is a smart solution for data-driven facilities management optimization. The tool collects data from sites and the market in order to drive real time analytics for optimizing facility operating costs, asset health and customer experience.",
        link: "",
        imagePath: "/images/vampfi.jpg"
      },
      {
        title: "DemandPointe",
        description:
          "DemandPointe is a State Government revenue collection solution designed to provide a simple and fraud free taxation system. Developed with Vue.js, CodeIgniter/PHP & MySQL",
        link: "",
        imagePath: "/images/demandpointe.jpg"
      }
    ]
  }),
  head: () => ({
    title: "Work · Obapelumi"
  }),
  mixins: [globalMixin]
};
</script>

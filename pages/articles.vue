<template>
  <div>
    <div id="colorlib-work">
      <div class="container">
        <div class="row text-center">
          <h2 class="bold">Articles</h2>
        </div>
        <div class="row">
          <div class="col-md-12" v-for="article in articles" :key="article.title">
            <div class="work-entry-flex animate-box js-fullheight">
              <div class="col-three-forth js-fullheight">
                <div class="row no-gutters">
                  <div class="col-md-12 col-md-push-10 no-gutters">
                    <div
                      class="work-img js-fullheight"
                      :style="`background-image: url(${article.image});`"
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
                            <a :href="article.link" target="__blank">{{ article.title }}</a>
                          </h2>
                          <p>{{ article.description }}</p>
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
    articles: [
      {
        title: "Pagination with Vue.js",
        description:
          "I re-invented the good ol' pagianation wheel I had to re-invent the wheel but not without showing off some of some really cool things Vue.js can do.",
        link: "https://medium.com/@obapelumi/pagination-with-vuejs-1f505ce8d15b",
        image: 'https://miro.medium.com/max/700/1*N4utgtv7bDRTUk9-y9Zq0A.png'
      },
      {
        title: "HTML Form Validation",
        description:
          "In this article I talked about how you can leverage HTML5 validation while overriding the boring defaults, so you can display validation errors as fancy as you like",
        link: "https://itnext.io/form-validation-with-html-vuejs-54ec18e473aa",
        image: 'https://miro.medium.com/max/700/1*lg4K73QpcODX3WmW4Vbnlg.png'
      },
      {
        title: "Deploying Adonis.js 5.0 to Google App Engine (Part 1)",
        description:
          "I had been exploring Adonis.js 5.0 and Google Cloud Platform and decided to document what I had learnt, from building out the Adonis.js 5.0 application locally to deployment on Google App Engine",
        link: "https://dev.to/crudecoder/deploying-adonis-js-5-0-app-to-google-app-engine-part-1-1g93",
        image: '/images/adonis-deploy-1.png'
      },
      {
        title: "Deploying Adonis.js 5.0 to Google App Engine From Version Control",
        description:
          "In a previous article I described the deployment process on Google App Engine. In this article I talked about how to set up Google Cloud Build to automate the deployment of an Adonis.js 5.0 application from version control",
        link: "https://dev.to/crudecoder/deploying-adonis-js-5-0-to-google-app-engine-from-version-control-1o33",
        image: '/images/adonis-deploy-2.png'
      }
    ]
  }),
  head: () => ({
    title: "Articles · Obapelumi"
  }),
  mixins: [globalMixin]
};
</script>

const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Emmanuel Olomolaiye',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Karla:400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700' },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/icomoon.css' },
      { rel: 'stylesheet', href: '/css/bootstrap.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/css/style.css' },
    ],
    script: [
      { src: '/js/modernizr-2.6.2.min.js' },
      { src: '/js/jquery.min.js', body: true },
      { src: '/js/jquery.easing.1.3.js', body: true },
      { src: '/js/bootstrap.min.js', body: true },
      { src: '/js/jquery.waypoints.min.js', body: true },
      { src: '/js/owl.carousel.min.js', body: true },
      { src: '/js/jquery.magnific-popup.min.js', body: true },
      { src: '/js/magnific-popup-options.js', body: true },
      // { src: '/js/main.js', body: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#333' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}

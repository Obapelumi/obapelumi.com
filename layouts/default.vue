<template>
  <div>
    <nav id="colorlib-main-nav" role="navigation">
      <a
        href="#"
        class="js-colorlib-nav-toggle colorlib-nav-toggle active"
        @click.prevent="burgerMenu()"
      >
        <i></i>
      </a>
      <div class="js-fullheight colorlib-table">
        <div class="colorlib-table-cell js-fullheight">
          <div class="row">
            <div class="col-md-12">
              <ul>
                <nuxt-link
                  tag="li"
                  to="/"
                  exact-active-class="active"
                  @click.native="burgerMenu()"
                >
                  <a>Home</a>
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/work"
                  exact-active-class="active"
                  @click.native="burgerMenu()"
                >
                  <a>Work</a>
                </nuxt-link>
                <nuxt-link
                  tag="li"
                  to="/articles"
                  exact-active-class="active"
                  @click.native="burgerMenu()"
                >
                  <a>Articles</a>
                </nuxt-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div id="colorlib-page">
      <header>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="colorlib-navbar-brand">
                <nuxt-link class="colorlib-logo" to="/">OBAPELUMI</nuxt-link>
              </div>
              <a
                href="#"
                class="js-colorlib-nav-toggle colorlib-nav-toggle"
                @click.prevent="burgerMenu()"
              >
                <i></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    burgerMenu() {
      if ($("body").hasClass("menu-show")) {
        $("body").removeClass("menu-show");
        $("#colorlib-main-nav > .js-colorlib-nav-toggle").removeClass("show");
      } else {
        $("body").addClass("menu-show");
        setTimeout(function() {
          $("#colorlib-main-nav > .js-colorlib-nav-toggle").addClass("show");
        }, 900);
      }
    }
  }
};
</script>

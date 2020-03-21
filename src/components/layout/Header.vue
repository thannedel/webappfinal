<template>
  <header class="header">
    <div id="nav">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
          <!--  <b-navbar-brand></b-navbar-brand> -->

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item>
                <router-link to="/">Home</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/albums">Albums</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/singles">Singles</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/signin">Chat</router-link>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
/* .header {
  position: fixed;
  width: 100%;
  z-index: 5;
  bottom: 0%;
} */
a {
  color: #f0f3f6 !important;
  text-decoration: none !important;
}
</style>

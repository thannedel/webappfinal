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
                <router-link to="/signin">Sign In</router-link>
              </b-nav-item>
              <b-nav-item>
                <router-link to="/chat">Chat</router-link>
              </b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
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
  top: 0;
} */
a {
  color: #f0f3f6 !important;
  text-decoration: none !important;
}
</style>

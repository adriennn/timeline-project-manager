<template>
      <div class="nav-right" style="overflow: visible">
          <b-dropdown v-model="navigation" position="is-bottom-left">

              <a class="nav-item" slot="trigger">
                  <span>Menu</span>
                  <b-icon icon="arrow_drop_down"></b-icon>
              </a>

              <b-dropdown-option subheader>
                  Logged in as <b>{{ username }}</b>
              </b-dropdown-option>

              <b-dropdown-option separator></b-dropdown-option>

              <b-dropdown-option value="home">
                <router-link tag="li" title="Home" to="/">
                  <b-icon icon="home"></b-icon> Home
                </router-link>
              </b-dropdown-option>

              <b-dropdown-option value="settings">
                <router-link tag="li" title="Settings" to="/settings">
                  <b-icon icon="dashboard"></b-icon> Settings
                </router-link>
              </b-dropdown-option>

              <b-dropdown-option separator></b-dropdown-option>

              <b-dropdown-option v-if="loggedIn" value="logout">
                <router-link tag="li" title="User info" to="/user">
                  <b-icon icon="person"></b-icon> Profile
                </router-link>
              </b-dropdown-option>

              <b-dropdown-option v-if="loggedIn" value="logout">

                <router-link tag="li" title="Logout" to="/">
                  <b-icon icon="exit_to_app"></b-icon>Logout
                </router-link>
              </b-dropdown-option>

          </b-dropdown>

      </div>

</template>

<script>

export default {
  name: 'login',
  data() {
    return {
      navigation: 'home',
      isPublic: true,
      loggedIn: true,
      username: 'Anon'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

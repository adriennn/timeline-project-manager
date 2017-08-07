<template id="">
  <nav class="navbar">
    <div class="navbar-brand">

      <a class="navbar-item" href="https://usetimeline.io">
        <img src="/static/img/logo.png" alt="Timeline: A simple visual personal project management app." width="120">
      </a>

      <login></login>

    </div>
  </nav>
</template>

<script type="text/javascript">
// login menu from dropdown in navbar
import Login from './Login.vue'

export default {
    name: 'navbar'
  , components : {'login': Login }
};

</script>

<style scoped>

</style>

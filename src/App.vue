<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'

export default {
    name: 'app'
  , components : {'navbar': Nav }
};

</script>

<style>

#app {
  height: 100vh;
}

</style>

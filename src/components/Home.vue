<template>

  <section class="hero is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          {{ msg1 }}
        </h1>
        <h2 class="subtitle">
          {{ msg2 }}
        </h2>

        <figure>
          <img src="/static/img/mock.png" alt="App mockup" width="60%">
          <figcaption>
            {{ msg3 }}
          </figcaption>
        </figure>


      </div>
    </div>
  </section>

</template>

<script>
export default {
    name: 'home'
  , components: {}
  , data() {
      return {
          msg1: 'Straight to the point. I like that.'
        , msg2: 'Welcome to your new minimalistic no-bullshit personal project manager.'
        , msg3: 'Timeline seamlessly integrates with Github.com, Abstract and many other version-tracking platforms. See the full list here.'
      };
    }
};
</script>

<style scoped>
figure {
    text-align: center;
}
figcaption {
  width: 50%;
  text-align: left;
  left: 25%;
  position: relative;
}

</style>

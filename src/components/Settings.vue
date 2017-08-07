<template>
  <div class="box-demo-show">

      <b-dropdown v-model="navigation">

          <b-option>Action</b-option>
          <b-option>Another action</b-option>
          <b-option>Something else</b-option>

      </b-dropdown>

      <button class="button content is-success" @click="success">
          Toast (custom)
      </button>

  </div>
</template>

<script>
export default {
  methods: {
    success () {
      this.$toast.open({
        message: 'Something happened correctly!',
        type: 'is-success'
      })
    }
  }
  , data() {
      return {
          switchState: true
        , checkboxState: true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

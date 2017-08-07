<template>
  <div class="box-demo-show">

      <b-dropdown>
          <button class="button" slot="trigger">
              <span>Dropdown</span>
              <b-icon icon="arrow_drop_down"></b-icon>
          </button>

          <b-dropdown-option>Action</b-dropdown-option>
          <b-dropdown-option>Another action</b-dropdown-option>
          <b-dropdown-option>Something else</b-dropdown-option>
      </b-dropdown>

      <b-tooltip label="Tooltip right" position="is-bottom">
          <button class="button is-dark">Right</button>
      </b-tooltip>

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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

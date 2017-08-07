<template>

<line></line>

</template>

<script>
import Line from './Line.vue'
import Add from './Add.vue'
import HandleFile from './HandleFile.vue'

export default {
    name: 'timeline'
  , components : {
      'line': Line
    // , 'add': Add
    // , 'handlefile': HandleFile
  }
};
</script>

<style scoped></style>

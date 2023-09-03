<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ age }} Years Old</h3>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      }
    },
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>

<style>

</style>
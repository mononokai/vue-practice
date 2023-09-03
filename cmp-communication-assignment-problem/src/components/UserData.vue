<template>
  <div>
    <form @submit.prevent="submitData">
      <label>Name:</label>
      <input type="text" v-model="inputName">
      <label>Age:</label>
      <input type="number" v-model="inputAge">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    emits: ['set-data'],
    data() {
      return {
        inputName: '',
        inputAge: '',
      }
    },
    methods: {
      submitData() {
        this.$emit('set-data', this.inputName, this.inputAge)
        this.inputName = '';
        this.inputAge = '';
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
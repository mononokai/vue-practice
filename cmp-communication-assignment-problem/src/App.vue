<template>
  <div>
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: 'David',
          age: 29,
        }
      }
    },
    methods: {
      setUserData(name, age) {
        this.user = {
          name: name,
          age: age
        }
      }
    }
  }
</script>

<style>
html {
  font-family: sans-serif;
}

div {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
}
</style>
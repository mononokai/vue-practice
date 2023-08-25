const app = Vue.createApp({
  data() {
    return {
      name: "David",
      age: 29,
      image: "https://images.unsplash.com/photo-1692795172302-090bb5063b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
    }
  },
  methods: {
    randomNum() {
      return Math.random();
    }
  }
});

app.mount('#assignment');
const app = Vue.createApp({
  data() {
    return ({
      result: 0
    })
  },
  computed: {
    number() {
      if (this.result < 37) {
        return "Not there yet";
      }
      else if (this.result > 37) {
        return "Too much!";
      }
      else {
        return this.result;
      }
    }
  },
  watch: {
    number(value) {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    }
  },
  methods: {
    add(num) {
      this.result = this.result + num;
    }
  }
})

app.mount('#assignment');
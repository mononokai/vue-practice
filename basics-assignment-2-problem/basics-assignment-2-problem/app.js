const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      confirmedInput: '',
    }
  },
  methods: {
    clickAlert() {
      alert("click't")
    },
    setInput(event) {
      this.userInput = event.target.value;
    },
    setConfirmedInput(event) {
      this.confirmedInput = event.target.value;
    }
  }
})

app.mount("#assignment");
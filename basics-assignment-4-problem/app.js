const app = Vue.createApp({
  data() {
    return {
      classInput: '',
      pIsVisible: true,
      inlineStyle: '',
    }
  },
  computed: {
    pClasses() {
      return {
        visible: this.pIsVisible,
        hidden: !this.pIsVisible
      }
    }
  },
  methods: {
    hideP() {
      this.pIsVisible = !this.pIsVisible;
    }
  }
});

app.mount('#assignment');
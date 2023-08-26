const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      // fullname: ''
    };
  },
  watch:{
    counter(value) {
      if (value > 50) {
        // storing this in that in order to bring the object up to the timeout function
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000)
      }
    }
    // name(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else {
    //     this.fullname = value + ' ' + this.lastName;
    //   }
    // },
    // lastName() {
    //   if (value === '') {
    //     this.fullname = '';
    //   }
    //   else {
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  computed: {
    fullname() {
      if (this.name === '' || this.lastName === '') {
        return '';
      }

      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    subtract(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    submitForm(event) {
      alert('Submitted!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      if (this.name === '') {
        return '';
      }

      return this.name + ' ' + "Leach";
    }
  }
});

app.mount('#events');

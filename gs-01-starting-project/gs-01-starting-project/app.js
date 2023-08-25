// const buttonEle = document.querySelector('button');
// const inputEle = document.querySelector('input');
// const listEle = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEle.value;
//   const listItemEle = document.createElement('li');

//   listItemEle.textContent = enteredValue;
//   listEle.appendChild(listItemEle);
//   inputEle.value = '';
// };

// buttonEle.addEventListener('click', addGoal);

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');
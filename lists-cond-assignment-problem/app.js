const app = Vue.createApp({
  data() {
    return {
      taskInput: '',
      tasks: [],
      displayTasks: true,
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.taskInput);
    },
    hideTasks() {
      this.displayTasks = !this.displayTasks;
    }
  }
})

app.mount('#assignment')
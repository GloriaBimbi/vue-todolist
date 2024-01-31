const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      toDoElements: [
        {
          text: "Fare la spesa",
          done: true,
        },
        {
          text: "Studiare per interrogazione",
          done: false,
        },
        {
          text: "Pulire casa",
          done: false,
        },
        {
          text: "Cucinare la cena",
          done: false,
        },
        {
          text: "Lavare i piatti sporchi",
          done: false,
        },
        {
          text: "Rispondere alle e-mail",
          done: false,
        },
      ],
    };
  },

  methods: {
    invertStatus(i) {
      this.toDoElements[i].done = !this.toDoElements[i].done;
    },
    delateToDoElement(i) {
      this.toDoElements.splice(i, 1);
    },
  },
  mounted() {},
});

app.mount("#app");

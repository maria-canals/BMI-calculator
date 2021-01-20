const App = {
  data() {
    return {
      height: "",
      weight: "",
      result: "",
    };
  },
  methods: {
    getFormula(e) {
      this.result = (
        this.weight /
        ((this.height * this.height) / 10000)
      ).toFixed(2);
    },
  },
};

Vue.createApp(App).mount(".container");

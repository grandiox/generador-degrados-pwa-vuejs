const app = Vue.createApp({
  data: () => ({
    title: "Generador de Degragados APP - Vue",
    colors: {
      c1: "#0032A8",
      c2: "#FF0000",
    },
    orientacion: 1,
  }),
  computed: {
    setColor() {
      if (this.orientacion == 1) {
        return `background: linear-gradient(to right, ${this.colors.c1}, ${this.colors.c2})`;
      } else if (this.orientacion == 2) {
        return `background: linear-gradient(to left, ${this.colors.c1}, ${this.colors.c2})`;
      } else if (this.orientacion == 3) {
        return `background: linear-gradient(to top, ${this.colors.c1}, ${this.colors.c2})`;
      } else if (this.orientacion == 4) {
        return `background: linear-gradient(to bottom, ${this.colors.c1}, ${this.colors.c2})`;
      } else {
        return `background: linear-gradient(to right, ${this.colors.c1}, ${this.colors.c2})`;
      }
    },
  },
});

import "@mdi/font/css/materialdesignicons.css";
import "vuetify/lib/styles/main.sass";
import { createVuetify } from "vuetify";
import * as components from "vuetify/lib/components";
import * as directives from "vuetify/lib/directives";

export default createVuetify({
  components,
  directives,
  theme: {
    disable: false, // Kikapcsolja a Vuetify stylesheet alapjait.
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#0054A6",
        secondary: "#FF9F12",
        accent: "#A2C5E3", //#85AEFA
        error: "#D0201F",
        // info: "#2196F3",
        success: "#008500",
        // warning: "#FFC107",
      },
    },
  },
});

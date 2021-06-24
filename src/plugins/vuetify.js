import "@fortawesome/fontawesome-free/css/all.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      light : {
        background: "#FFFFFF",
        secondary: "#D8BC98",
        primary: "#D8BC98",
        info: "#D8BC98"
      }
  },
  icons: {
    iconfont: "fa"
  }
});

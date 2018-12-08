import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";
import VeeValidate from "vee-validate";
import vSelect from "vue-select";
Vue.component("v-select", vSelect);

Vue.use(VeeValidate);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

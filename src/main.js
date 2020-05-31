import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 按需导入element-UI组件
import { Button, Select, Option } from "element-ui";
Vue.use(Button);
Vue.use(Select);
Vue.use(Option);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import VueHighcharts from "vue-highcharts";
import VueClipboard from "vue-clipboard2";
import Notifications from "vue-notification";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueHighcharts);
VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
Vue.use(Notifications);

Vue.filter("measurement", function (value) {
  const types = {
    pm10: "PM10",
    pm25: "PM2.5",
    temperature: "Tmp",
    pressure: "Pr",
    humidity: "Hm",
  };
  return types[value] || "";
});
Vue.filter("measurementFormat", function (value, type) {
  const types = {
    temperature: "℃",
    pressure: "mmHg",
    humidity: "%",
  };
  return types[type] ? `${value} ${types[type]}` : value;
});
Vue.filter("collapse", function (value) {
  return value.slice(0, 6) + "..." + value.slice(-4);
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

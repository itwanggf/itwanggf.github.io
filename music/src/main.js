import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Mint from 'mint-ui'
import VueTouch from 'vue-touch'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Mint)

Vue.prototype.$ajax = axios
Vue.use(ElementUI)
Vue.use(iView)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach((to, from, next) => {
  iView.LoadingBar.finish();
  if (to.hash === '') window.scrollTo(0, 0);  // 避免 Anchor 的示例滚动
  
});

const ad = num => {
  return num<10 ? "0" + num : num
}
Vue.filter("formatTime", (value, type) => {
  let dataTime = "";
  const data = new Date(value);
  const year = data.getFullYear();
  const month = ad(data.getMonth() + 1);
  const day = ad(data.getDate());
  const hour = ad(data.getHours());
  const minute = ad(data.getMinutes());
  const second = ad(data.getSeconds());
  if (type == 1) dataTime = year + "-" + month + "-" + day;
  else if (type == 2) dataTime = year + "-" + month + "-" + day + " " + hour + ":" + minute+ ":" + second;
  else if (type == 3) dataTime = hour + ":" + minute + ":" + second;
  else if (type == 4) dataTime = year + "-" + month;
  return dataTime; 
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
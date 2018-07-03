// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Button,Row,col,Search,Swipe,SwipeItem,Lazyload} from 'vant'
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(Vant) 

Vue.use(Button).use(Row).use(col).use(Search).use(Swipe).use(SwipeItem).use(Lazyload)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

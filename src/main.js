// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import mint from 'mint-ui'
import ElementUI from 'element-ui';
import App from './App'
import VueResource from 'vue-resource'
import 'mint-ui/lib/style.css'
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueResource)
Vue.use(mint)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

import './../node_modules/foundation-sites/dist/css/foundation.min.css'
import './../node_modules/foundation-sites/dist/js/foundation.min.js'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  ...App,
  mounted: function () {
    $(this.$el).foundation()
  }
})

import Vue from 'vue'
import App from './App'
import router from './router'

import 'PKG/styles/base.scss'

import GLui from 'PKG'

GLui.viewport.init()

Vue.use(GLui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {sync} from 'vuex-router-sync'
import Vuetify from 'vuetify'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

import 'vuetify/dist/vuetify.min.css'
Vue.config.productionTip = false

sync(store, router)
Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)
Vue.use(VueYouTubeEmbed, { global: true, componentId: 'youtube' })
Vue.component('panel', Panel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})

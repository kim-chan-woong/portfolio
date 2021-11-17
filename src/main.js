import Vue from 'vue'
import App from './App.vue'
import VueTyper from 'vue-typer'
import { router } from './routes/index.js'

Vue.use(VueTyper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

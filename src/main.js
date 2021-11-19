import Vue from 'vue'
import App from './App.vue'
import VueTyper from 'vue-typer'

Vue.use(VueTyper)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

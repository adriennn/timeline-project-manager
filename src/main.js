import Vue from 'vue'
import App from './App.vue'
import Nav from './components/Nav'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
// import fonts from 'google-fonts'

// const list = {
//     'Ropa Sans': ['400', '400italic']
//   , 'Source Sans Pro': true
//   , 'Raleway': 400
// }
// const fonts.add(list)

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
    el: '#app'
  , router
  // , render: h => h(App)
  , template: '<App/>'
  , components: { App }
})

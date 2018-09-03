import Vue from 'vue'
import App from './user'

const app = new Vue(App)
app.$mount()
export default {
  config: {
    'usingComponents': {
      'i-button': '../../iview/button/index'
    }
  }
}

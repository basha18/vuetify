import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import axios from 'axios'

import Appbar from './components/Appbar'
import Footbar from './components/Footbar'
import Welcome from './views/welcome'
import StaffAppbar from './components/Staff-Appbar'
import PatientAppbar from './components/Patient-Appbar'

Vue.component('Appbar',Appbar);
Vue.component('Footbar',Footbar);
Vue.component('welcome',Welcome);
Vue.component('Staff-Appbar',StaffAppbar)
Vue.component('Patient-Appbar',PatientAppbar)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vth0to5g95.execute-api.us-east-1.amazonaws.com/v1'
//axios.defaults.headers.common['Authorization'] = 'fasfdsa'
axios.defaults.headers.get['Accepts'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const reqInterceptor = axios.interceptors.request.use(config => {
	  console.log('Request Interceptor', config)
	  return config
})
const resInterceptor = axios.interceptors.response.use(res => {
	  console.log('Response Interceptor', res)
	  return res
})

new Vue({
  vuetify,
  router,
  store,	
  render: h => h(App)
}).$mount('#app')

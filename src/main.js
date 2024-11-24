import Vue from 'vue'
import App from '@/App.vue'

// Расширения
import router from '@/router'
import store from '@/store'

// Стили
import '@/assets/css/main.css'

// Регистрация компонентов
import TextInput from '@/components/UI/TextInput.vue'
import CommonButton from '@/components/UI/CommonButton.vue'
import SvgIcon from '@/components/UI/SvgIcon.vue'

Vue.component('TextInput', TextInput)
Vue.component('CommonButton', CommonButton)
Vue.component('SvgIcon', SvgIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')

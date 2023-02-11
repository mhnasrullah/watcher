import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import App from './App.vue'
import store from './store'

const vuetify = createVuetify({
    components,
    directives,
  })

createApp(App)
.use(vuetify)
.use(store)
.mount('#app')

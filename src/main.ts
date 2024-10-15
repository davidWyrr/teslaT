import './assets/main.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
    components,
    directives,
  })
const app = createApp(App)

app.use(router)
app.use(VueApexCharts);
app.use(vuetify)
app.component('apexchart',VueApexCharts)

app.mount('#app')

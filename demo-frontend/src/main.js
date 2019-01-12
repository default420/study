import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import router from './router/router.js'

Vue.config.productionTip = false
Chart.plugins.unregister(ChartDataLabels)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

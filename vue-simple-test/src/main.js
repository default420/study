import Vue from 'vue'
import App from './App.vue'
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Vue.config.productionTip = false
Chart.plugins.unregister(ChartDataLabels)

new Vue({
  render: h => h(App)
}).$mount('#app')

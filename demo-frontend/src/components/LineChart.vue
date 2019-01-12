<template>
  <div>
    <canvas id="sample" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  data () {
    return {
      chart: null,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Example Dataset',
          borderColor: 'rgb(54, 162, 235)',
          data: [
            20,
            30,
            20,
            15,
            40,
            25,
            50
          ],
          datalabels: {
            align: 'end'
          },
          fill: false
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Example Line Chart'
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    }
  },
  mounted () {
    let ctx = document.getElementById('sample')
    this.chart = new Chart(ctx, {
      type: 'line',
      plugins: [ChartDataLabels],
      data: this.data,
      options: this.options
    })
  }
}
</script>

<template>
  <div>
    <canvas :id="ctx" />
  </div>
</template>

<script>
import Chart from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default {
  name: 'LineChart',

  data: () => ({
    chart: null,
    ctx: 'chart',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Example Dataset',
        backgroundColor: 'rgb(54, 162, 235)',
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
          ticks: {
            beginAtZero: true,
            stepSize: 5
          },
          scaleLabel: {
            display: true,
            labelString: 'Value'
          }
        }]
      }
    }
  }),

  mounted () {
    this.chart = new Chart(this.ctx, {
      type: 'line',
      plugins: [ChartDataLabels],
      data: this.data,
      options: this.options
    })
  }
}
</script>

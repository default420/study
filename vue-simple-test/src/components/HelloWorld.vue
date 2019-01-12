<template>
  <div class="hello">
    <button @click="requestApi">
      API TEST
    </button>
    <p>{{ msg }}</p>
    <LineChart />
  </div>
</template>

<script>
import api from '@/api/api'
import LineChart from './LineChart.vue'

export default {
  name: 'HelloWorld',
  components: {
    LineChart
  },

  data () {
    return {
      msg: 'default'
    }
  },

  methods: {
    requestApi () {
      api
        .then(response => {
          this.msg = response.statusText
        })
    }
  }
}
</script>

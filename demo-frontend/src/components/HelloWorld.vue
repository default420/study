<template>
  <div class="hello">
    <button @click="requestApi">
      API TEST
    </button>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import api from '@/api/api'

export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: 'default'
    }
  },

  methods: {
    requestApi () {
      api.get('https://api.github.com')
        .then(response => {
          this.msg = response.statusText
        })
    }
  }
}
</script>

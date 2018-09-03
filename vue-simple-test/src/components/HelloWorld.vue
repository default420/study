<template>
  <div class="hello">
    <button @click="getUsers">API TEST No.1</button>
    <p>{{ msg }}</p>
   </div>
</template>

<script>
import api from '@/api/api.js'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'default'
    }
  },
  methods: {
    getUsers() {
      api.then(response => {
        this.$data.msg =  response.statusText
      })
    }
  }
}
</script>

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

  data: () => ({
    msg: 'default'
  }),

  methods: {
    async requestApi () {
      const res = await api.get('/account')
      this.msg = res.data.message
    }
  }
}
</script>

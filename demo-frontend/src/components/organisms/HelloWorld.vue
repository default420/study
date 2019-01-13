<template>
  <div class="hello">
    <v-btn @click="requestApi">
      API TEST
    </v-btn>
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
      this.msg = res.data.username
    }
  }
}
</script>

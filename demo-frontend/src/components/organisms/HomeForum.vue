<template>
  <div>
    <RequestApiForm
      @requestApi="requestApi"
      :message="text"
    />
  </div>
</template>

<script>
import RequestApiForm from '@/components/molecules/RequestApiForm'
import api from '@/api/api'

export default {
  name: 'HelloWorld',

  components: {
    RequestApiForm
  },

  data: () => ({
    text: 'can i see me?'
  }),

  methods: {
    async requestApi () {
      try {
        const res = await api.get('/account')
        this.text = res.data.username
      } catch (error) {
        this.text = error
      }
    }
  }

}
</script>

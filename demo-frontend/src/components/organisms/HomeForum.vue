<template>
  <div>
    <RequestApiForm
      @requestApi="requestData"
      :message="text"
    />
  </div>
</template>

<script>
import RequestApiForm from '@/components/molecules/RequestApiForm'
import api from '@/api/api'

export default {
  name: 'HomeForum',

  components: {
    RequestApiForm
  },

  data: () => ({
    text: 'can i see me?'
  }),

  methods: {
    async requestData () {
      try {
        const res = await api.get('/account')
        this.text = res.data.username
      } catch (error) {
        this.text = error.response.status.toString()
      }
    }
  }

}
</script>

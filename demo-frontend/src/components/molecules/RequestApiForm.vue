<template>
  <div>
    <Button @handleEvent="requestApi">
      API TEST
    </Button>
    <Message :msg="message" />
  </div>
</template>

<script>
import Button from '@/components/atoms/Button'
import Message from '@/components/atoms/Message'

export default {
  name: 'RequestApiForm',

  components: {
    Button,
    Message
  },

  props: {
    message: {
      type: String,
      default: null
    }
  },

  methods: {
    requestApi () {
      this.$emit('requestApi')
    }
  }

}
</script>

<template>
  <div>
    <Button @handleEvent="$emit('requestApi')">
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
  }

}
</script>

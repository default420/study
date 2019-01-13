<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Message',
  props: {
    msg: {
      type: String,
      default: null
    }
  }
}
</script>

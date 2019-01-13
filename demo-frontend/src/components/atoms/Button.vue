<template>
  <v-btn @click="handleEvent">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Button',

  methods: {
    handleEvent () {
      this.$emit('handleEvent')
    }
  }
}
</script>

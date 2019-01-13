<template>
  <v-btn @click="$emit('handleEvent')">
    <slot />
  </v-btn>
</template>

<script>
export default {
  name: 'Button'
}
</script>

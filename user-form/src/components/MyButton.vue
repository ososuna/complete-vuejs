<template>
  <button
    :style="{ background, color }"
    :disabled="valid"
  >Button
  </button>
</template>

<script>
export default {
  props: {
    background: {
      type: String
    },
    color: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  data() {
    return {
      valid: true
    }
  }
}
</script>

<style>

</style>
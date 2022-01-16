<template>
  <div>
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input
      :id="name"
      :value="value"
      @input="input"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rules: {
      // min: number
      // required: boolean
      type: Object,
      default() {
        return {}
      },
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    input($event) {
      this.$emit('update', {
        name: this.name.toLowerCase(),
        value: $event.target.value
      })
    }
  },
  computed: {
    error() {
      if (this.rules.required && this.value.length === 0) {
        return 'Value is required'
      }
      if (this.rules.min > this.value.length) {
        return `The min length is ${ this.rules.min }`
      }
      return ''
    }
  }
}
</script>

<style scoped>
.input {
  display: flex;
  flex-direction: column;
}
.label {
  display: flex;
  justify-content: space-between;
}
.error {
  color: red;
}
.input {
  width: 100%;
}
input {
  box-sizing: border-box;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid silver;
  margin: 2px;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
}
</style>

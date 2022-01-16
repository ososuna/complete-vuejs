<template>
  <div>
    <h1>User Form</h1>
    <MyInput
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      @update="update"
    />
    <MyInput
      name="Password"
      :rules="{ required: true, min: 8 }"
      :value="password.value"
      @update="update"
    />
    <MyButton
      background="darkslateblue"
      color="red"
      :disabled="valid"
    />
  </div>
</template>

<script>

import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
  components: {
    MyButton,
    MyInput
  },
  data() {
    return {
      valid: true,
      username: {
        value: 'user',
        valid: false
      },
      password: {
        value: 'pass',
        valid: false
      }
    }
  },
  methods: {
    update({name, value}) {
      this[name].value = value
    }
  }
}
</script>

<style>

</style>

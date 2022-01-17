<template>
  <div>
    <h1>User Form</h1>
    <form @submit.prevent="submit">
      <MyInput
        name="Username"
        :rules="{ required: true, min: 5 }"
        :value="username.value"
        :error="username.error"
        @update="update"
      />
      <MyInput
        name="Password"
        :rules="{ required: true, min: 8 }"
        type="password"
        :value="password.value"
        :error="password.error"
        @update="update"
      />
      <MyButton
        background="darkslateblue"
        color="white"
        :disabled="!valid"
      />
    </form>
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
      username: {
        value: 'user',
        error: ''
      },
      password: {
        value: 'pass',
        error: ''
      }
    }
  },
  methods: {
    update({ name, value, error }) {
      this[name].value = value
      this[name].error = error
      console.log(this.valid);
    },
    submit($event) {
      console.log($event);
    }
  },
  computed: {
    valid() {
      return (
        !this.username.error &&
        !this.password.error
      )
    }
  }
}
</script>

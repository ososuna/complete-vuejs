<template>
  <div>
    <h1>User Form</h1>
    <MyInput
      name="Username"
      :rules="{ required: true, min: 5 }"
    />
    <MyButton
      background="darkslateblue"
      color="red"
      disabled="false"
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
  }
}
</script>

<style>

</style>

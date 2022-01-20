<template>
<div>
  <div class="title">
    <slot name="title"/>
  </div>
  <div class="content">
    <slot name="content"/>
  </div>
  <div class="description">
    <slot name="description"/>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
.cards {
  display: flex;
}
.title, .content, .description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title, .content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>

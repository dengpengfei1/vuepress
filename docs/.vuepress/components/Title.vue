<template>
  <header class="title">
    <h3>{{title}}</h3>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      default: 'fui',
      type: String
    }
  }
}
</script>

<style scoped>
.title {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  border-bottom: 1px solid #E8E8E8;
  margin-top: 0 !important;
  text-align: center;
  background-color: #fff;
}
.title h3 {
  line-height: 50px;
  padding: 0 !important;
  margin: 0 !important;
}
</style>

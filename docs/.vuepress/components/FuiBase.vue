<template>
  <div class="base_item">
    <span>{{time}}</span>
    <p>
      <router-link :to="{ path: '/version/changes/' + tag + '.html' }">{{title}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: ''
    }
  },
  props: {
    title: {
      default: 'fui',
      type: String
    },
    tag: {
      default: '',
      type: String
    }
  },
  created () {
    let t = new Date()
    let tArr = t.toString().split(' ')
    this.time = tArr[1] + ' ' + tArr[2] + ', ' + tArr[3]
  }
}
</script>

<style scoped>
.base_item {
  margin-top: 10px;
  border-bottom: 1px solid #e8e8e8;
}
</style>

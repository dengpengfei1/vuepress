<template>
  <router-link :to="{ path: '/version/' + tag + '.html' }">
    <div class="base_item">
      <span class="time">{{time}}</span>
      <p class="title">
        {{title}}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      default: 'fui',
      type: String
    },
    tag: {
      default: '',
      type: String
    },
    time: {
      default: '',
      type: String
    }
  }
}
</script>

<style scoped>
.base_item {
  padding: 10px 20px;
  border-bottom: 1px solid #e8e8e8;
}

.base_item .time {
  color: #000;
}

.base_item .title {
  margin-top: 10px;
}
</style>

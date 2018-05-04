<template>
  <div>
    <Title title="版本更新"/>
    <div class="items">
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
      <FuiVersionItem time="May 3, 2018" tag="v1-changes/v1-5-5" title="修复bug"/>
    </div>
  </div>
</template>

<script>
import Title from './Title'
import FuiVersionItem from './FuiVersionItem'
export default {
  props: {
    version: {
      default: '',
      type: String
    }
  },
  components: {
    Title,
    FuiVersionItem
  }
}
</script>

<style scoped>
.items {
  margin-top: 50px;
}
</style>

<template>
  <div>
    <Title title="版本更新"/>
    <div class="items">
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug1"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug2"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug3"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug4"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug5"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug6"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug7"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug8"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug9"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug10"/>
      <FuiVersionItem time="May 3, 2018" tag="v2-changes/v1-5-5" title="修复bug11"/>
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

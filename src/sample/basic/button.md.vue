<template>
  <dk-layout class='sample-button'>
    <dk-navigation slot="header" title="按钮组件文档"></dk-navigation>
    <template slot="content">
      <div class='markdown' v-html="buttonMarkdown"></div>
    </template>
  </dk-layout>
</template>

<script>
import buttonMark from '../../../packages/button/README.md'
export default {
  data () {
    return {
      buttonMarkdown: this.md2html(buttonMark)
    }
  }
}
</script>

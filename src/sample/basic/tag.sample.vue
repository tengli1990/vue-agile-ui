<template>
  <dk-layout class='tag-sample'>
    <dk-navigation slot="header">标签</dk-navigation>
    <template slot="content">
      <dk-field title='形状'>
        <dk-tag>标签</dk-tag>
        <dk-tag shape="sharp">标签</dk-tag>
        <dk-tag shape="cycle">标签</dk-tag>
        <dk-tag shape="cycle" sharp="left-bottom">标签</dk-tag>
      </dk-field>

      <dk-field  class='mt20' title='类型填充'>
        <dk-tag>默认</dk-tag>
        <dk-tag type="warning" shape="sharp">警告</dk-tag>
        <dk-tag type="danger" shape="cycle">严重警告</dk-tag>
        <dk-tag type="activity" shape="cycle" sharp="left-bottom">活动</dk-tag>
      </dk-field>

      <dk-field  class='mt20' title='线框'>
        <dk-tag outline>默认</dk-tag>
        <dk-tag outline type="warning" shape="sharp">警告</dk-tag>
        <dk-tag outline type="danger" shape="cycle">严重警告</dk-tag>
        <dk-tag outline type="activity" shape="cycle" sharp="left-bottom">活动</dk-tag>
      </dk-field>

      <dk-field class='mt20' title='自定义填充'>
        <dk-tag shape="sharp" fill="pink">背景色</dk-tag>
        <dk-tag shape="cycle" fill="linear-gradient(#6dd333, #1dbcc6)">渐变</dk-tag>
        <dk-tag shape="cycle" sharp="left-bottom" fill='#eee' color="#333">文字颜色</dk-tag>
      </dk-field>
    </template>
  </dk-layout>

</template>

<script>
export default {
}

</script>

<style lang='less' scoped>
</style>

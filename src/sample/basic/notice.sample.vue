<template>
  <dk-layout class='notice-sample'>
    <dk-navigation slot="header">通知栏</dk-navigation>
    <template slot="content">
      <dk-field title='常规用法'>
        <dk-notice>默认通知栏</dk-notice>
        <dk-notice class='mt20' align="center">默认通知栏</dk-notice>
        <dk-notice class='mt20' round>圆角</dk-notice>
      </dk-field>

       <dk-field class="mt20" title='关闭'>
        <dk-notice close>默认通知栏</dk-notice>
      </dk-field>

      <dk-field class="mt20" title='自定义用法'>
        <dk-notice close color="#fff" fill="#909399">自定义背景和文字颜色</dk-notice>
        <dk-notice class='mt20' close color="#fff" fill="#67c23a">自定义背景和文字颜色</dk-notice>
        <dk-notice class='mt20' close color="#fff" fill="#e6a23c">自定义背景和文字颜色</dk-notice>
      </dk-field>

      <dk-field class="mt20" title='图标应用'>
        <dk-notice icon="exclamation-outline" close>自定义背景和文字颜色自定义背景和文字颜色自定义背景和文字颜色自定义背景和文字颜色自定义背景和文字颜色自定义背景和文字颜色</dk-notice>
        <dk-notice icon="notice" class='mt20' close color="#fff" fill="#f56c6c">自定义背景和文字颜色</dk-notice>
        <dk-notice icon="date-time" class='mt20' close color="#333" fill="#ccc">自定义背景和文字颜色</dk-notice>
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

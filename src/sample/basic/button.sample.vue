<template>
  <dk-layout class='sample-button'>
    <dk-navigation slot="header" title="按钮组件">
      <!-- <div slot='right' class="text" @click="onLookMarkdown">文档说明</div> -->
    </dk-navigation>
    <template slot="content">

      <dk-field title="基本">
        <dk-button>默认</dk-button>
        <dk-button type="primary mt20">确定</dk-button>
        <dk-button type="primary mt20" :inactive='inactive'>确定 Inactive</dk-button>
        <dk-button type="warning mt20">警告</dk-button>
        <dk-button type="warning mt20" inactive>警告 Inactive</dk-button>
        <dk-button type="danger mt20">严重警告</dk-button>
        <dk-button type="disabled mt20">禁用</dk-button>
      </dk-field>

      <dk-field class="mt20" title="圆角按钮">
        <dk-button type="primary round">确定</dk-button>
        <dk-button type="warning round mt20">警告</dk-button>
        <dk-button type="danger round mt20">严重警告</dk-button>
        <dk-button type="disabled round mt20">禁用</dk-button>
      </dk-field>

      <dk-field class="mt20" title="线性按钮">
        <dk-button type="primary outline">确定</dk-button>
        <dk-button type="warning outline mt20">警告</dk-button>
        <dk-button type="danger outline mt20">严重警告</dk-button>
        <dk-button type="primary outline round mt20">确定</dk-button>
      </dk-field>

      <dk-field class="mt20" title="行内按钮 - Inline">
        <dk-button type="primary" inline>确定</dk-button>
        <dk-button type="warning outline" inline>警告 </dk-button>
        <dk-button type="danger small" inline>严重警告</dk-button>
      </dk-field>

      <dk-field class="mt20" title="按钮组 - Group">
        <dk-button-group class="mt20">
          <dk-button type='primary' text="主要" />
        </dk-button-group>

        <dk-button-group class="mt20">
          <dk-button type='primary outline' text="次要" />
          <dk-button type='primary' text="主要" />
        </dk-button-group>

        <dk-button-group class="mt20">
          <dk-button type='primary' text="多个按钮" />
          <dk-button type='primary' text="多个按钮" />
          <dk-button type='danger' text="多个按钮" />
        </dk-button-group>
      </dk-field>

      <dk-field class="mt20" title="禁用">
        <dk-button-group class="mt20">
          <dk-button type='primary outline' disabled text="次要" />
          <dk-button type='primary' text="主要" disabled />
        </dk-button-group>
      </dk-field>
      <!-- <dk-view child></dk-view> -->
    </template>

  </dk-layout>
</template>

<script>
// import buttonMark from '../../../packages/button/README.md'
export default {
  data () {
    return {
      inactive: true
    }
  },
  mounted () {
    console.log(this.buttonMarkdown)
  },
  methods: {
    onLookMarkdown () {
      this.$router.push({
        path: '/sample/basic/button/markdown'
      })
    }
  }
}
</script>

<style lang='less' scoped>

</style>

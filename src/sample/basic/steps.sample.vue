<template>
  <dk-layout class="sample-steps">
    <dk-navigation slot="header">步骤条</dk-navigation>
    <template slot="content">
      <dk-field title="选中最新步骤">
        <dk-steps v-model='datalist' @click="onPopup" first />
      </dk-field>
    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      datalist: [{
        name: '标题一',
        brief: '描述',
        time: new Date(),
        tab: '可点击的'
      },
      {
        name: '标题二',
        brief: '描述时尚大方路上经过两个伤筋动骨',
        time: new Date(),
        tab: '可点击的'
      },
      {
        name: '标题三',
        brief: '描述',
        time: new Date(),
        tab: '可点击的'
      }]
    }
  },
  methods: {
    onPopup ({item, index}) {
      alert(item.name)
    }
  }
}

</script>

<style lang='less' scoped>

</style>

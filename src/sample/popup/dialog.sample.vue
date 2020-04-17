<template>
  <div class="sample-dialog">
    <dk-layout class='sample-button'>
      <dk-navigation slot="header" title="对话框"></dk-navigation>
      <template slot='content'>
        <template v-for='(type, index) in animationTypeList'>
          <dk-button-group class="mt20" :key="index">
            <dk-button class="primary lg" @click='dialog(type)'>{{type}} dialog</dk-button>
          </dk-button-group>
        </template>
      </template>
    </dk-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animationTypeList: ['bounce', 'zoom', 'fade', 'fade-up', 'fade-zoom', 'fade-zoom-up', 'punch', 'fade-punch']
    }
  },
  watch: {
    $route (val) {
      console.log('路由变化')
    }
  },
  methods: {
    dialog (animation) {
      this.$dialog({
        title: '标题',
        content: '这是一个“' + animation + '”动画弹出方式',
        animation: animation,
        maskClosable: true
      }).then(action => {
        console.log(action)
      })
    }
  }
}

</script>

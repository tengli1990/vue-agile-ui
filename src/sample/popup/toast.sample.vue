<template>
  <div class="sample-dialog">
    <dk-layout class='sample-button'>
      <dk-navigation slot="header" title="提示框"></dk-navigation>
      <template slot='content'>
        <dk-field title="文字提示">
          <dk-button-group class="mt20" >
            <dk-button @click='toast1()'>纯文字</dk-button>
          </dk-button-group>

          <dk-button-group class="mt20" >
            <dk-button @click='toast2()'>长文字</dk-button>
          </dk-button-group>
        </dk-field>
        <dk-field class='mt20' title="状态提示">
          <dk-button-group class="mt20" >
            <dk-button @click='toast3()'>成功</dk-button>
          </dk-button-group>

          <dk-button-group class="mt20" >
            <dk-button @click='toast4()'>失败</dk-button>
          </dk-button-group>
        </dk-field>
        <dk-field class='mt20' title="自定义位置">
          <dk-button-group class="mt20" >
            <dk-button @click='toast5("top")'>上</dk-button>
          </dk-button-group>

          <dk-button-group class="mt20" >
            <dk-button  @click='toast5("middle")'>中</dk-button>
          </dk-button-group>

           <dk-button-group class="mt20" >
            <dk-button  @click='toast5("bottom")'>下</dk-button>
          </dk-button-group>

          </dk-field>
        <dk-field class='mt20' title="载入等待">
          <dk-button-group class="mt20" >
            <dk-button @click='toast6()'>加载中</dk-button>
          </dk-button-group>
          <dk-button-group class="mt20" >
            <dk-button  @click='toast7()'>连续调用</dk-button>
          </dk-button-group>
        </dk-field>
      </template>
    </dk-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  watch: {
    $route (val) {
      console.log('路由变化')
    }
  },
  methods: {
    toast1 () {
      this.$toast.info('一段文字')
    },
    toast2 () {
      this.$toast.info('文字超出自动换行文字超出自动换行文字超出自动换行文字超出自动换行文字超出自动换行')
    },
    toast3 () {
      // 成功
      this.$toast.success('保存成功')
    },
    toast4 () {
      // 失败
      this.$toast.failed('保存失败')
    },
    toast5 (name) {
      // 位置
      this.$toast.info({
        position: name,
        content: '设置位置'
      })
    },
    toast6 () {
      // 位置
      this.$toast.loading('加载中...')
      setTimeout(() => {
        this.$toast.hide()
      }, 2000)
    },
    toast7 () {
      this.$toast.loading('加载中...')
      setTimeout(() => {
        // this.$toast.hide()
        this.$toast.success('加载完成')
      }, 2000)
    }
  }
}

</script>

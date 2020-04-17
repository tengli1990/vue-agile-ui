<template>
  <dk-layout class='sample-layout'>
      <dk-navigation slot="header" title="区块布局"></dk-navigation>
      <dk-field title="标题" brief="描述当前区块的含义插槽描述" headerLine>
          <div slot="action">
              <dk-button type='smaller' inline>操作按钮</dk-button>
          </div>
          <div class="field-content">
              内容区域插槽
          </div>
          <div slot="footer">
            区域页脚区域内容插槽
          </div>
      </dk-field>

      <dk-field class="mt20" title="统一管理子组件属性" align="left" label-width="1rem" brief="通过控制区块属性统一设置子组件属性的方式">
        <dk-detail-item title="标题一" content="志当存高远" />
        <dk-detail-item title="标题二">夫处世之道，亦即应变之术，岂可偏执一端？用兵之道，亦然如此，皆贵在随机应变</dk-detail-item>
        <dk-detail-item title="标题三">大丈夫生于乱世，当带三尺剑立不世之功；今所志未遂，奈何死乎</dk-detail-item>
      </dk-field>
  </dk-layout>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.field-content{
  background:#f2f2f2;
  text-align:center;
  padding:50px 0
}
</style>

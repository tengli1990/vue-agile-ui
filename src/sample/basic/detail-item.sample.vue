<template>
  <dk-layout class='sample-cell-item'>
    <dk-navigation slot="header">清单项</dk-navigation>
    <template slot="content">
      <dk-field title='基本用法' label-width="2.5rem">
        <dk-detail-item title="标准尺寸" content="内容" />
        <dk-detail-item title="单行" :clamp="1"
          content="容内容内容内俩舒服舒服容内容内容内服舒服容内容内容内容内容容内容内容内俩舒服舒服容内容内容内服舒服容内容内容内容内容容内容内容内俩舒服舒服容内容内容内服舒服容内容内容内容内容" line />
        <dk-detail-item title="多行" content="容内容内容内俩舒服舒服容内容内容内服舒服容内容内容内容内容" line />
        <dk-detail-item title="内容居左" content="五号梦中" align="left" line />
        <dk-detail-item title="标题宽度" content="夫君子之行，静以修身，俭以养德，非淡泊无以明志，非宁静无以致远" label-width="1.3rem" align="left" />
        <dk-detail-item title="多行上下居中" content="容内容内容内俩舒服舒服容内容内容内服舒服容内容内容内容内容" middle line />
        <dk-detail-item title="slot的方式">通过slot插入内容</dk-detail-item>
      </dk-field>

      <dk-field title='设置区块属性' align="left" label-width="1.2rem" class='mt20'>
        <dk-detail-item title="标题一" content="志当存高远" />
        <dk-detail-item title="标题二">夫处世之道，亦即应变之术，岂可偏执一端？用兵之道，亦然如此，皆贵在随机应变</dk-detail-item>
        <dk-detail-item title="标题三">大丈夫生于乱世，当带三尺剑立不世之功；今所志未遂，奈何死乎</dk-detail-item>
      </dk-field>

      <dk-field title="字体变化" class='mt20'>
        <dk-detail-item title="加粗" content="内容" bold></dk-detail-item>
        <dk-detail-item title="小尺寸" content="内容" size='small'></dk-detail-item>
        <dk-detail-item title="大尺寸" content="内容" size='large'></dk-detail-item>
      </dk-field>

      <dk-field title="上下结构" class='mt20'>
        <!-- <dk-detail-item title="备注" bold /> -->
        <dk-detail-item title="标题" title-bold>
          <div slot='bottom'>
            描述问题：请在这里展示您所描述的问题
          </div>
        </dk-detail-item>
      </dk-field>

      <dk-field title="插入组件" class='mt20'>
        <dk-detail-item title="单选框" middle>
          <dk-radio value="1" v-model='name' inline label="选项一"></dk-radio>
          <dk-radio value="2" v-model='name' inline label="选项二"></dk-radio>
        </dk-detail-item>

        <dk-detail-item title="步进器" middle>
          <dk-stepper v-model='stepperValue'></dk-stepper>
        </dk-detail-item>

      </dk-field>

    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      name: '2',
      stepperValue: 0
    }
  },
  methods: {

  }
}

</script>

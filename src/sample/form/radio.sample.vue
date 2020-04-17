<template>
  <dk-layout class='sample-button'>
    <dk-navigation slot="header" title="表单组件"></dk-navigation>
    <template slot="content">
      <dk-field title="默认">
        <dk-radio value="1" v-model='name' label="选项一"></dk-radio>
        <dk-radio value="2" v-model='name' label="选项二"></dk-radio>
      </dk-field>

      <dk-field class="mt20" title="描述">
        <dk-radio value="1" v-model='name' label="选项一" brief='描述...'></dk-radio>
        <dk-radio value="2" v-model='name' label="选项二" brief='描述...'></dk-radio>
      </dk-field>

      <dk-field class="mt20" title="改变icon位置">
        <dk-cell-item title="性别" no-border>
          <dk-radio value="1" v-model='name' inline icon-position="behind" label="选项一"></dk-radio>
          <dk-radio value="2" v-model='name' inline icon-position="behind" label="选项二"></dk-radio>
        </dk-cell-item>
        <dk-radio value="1" v-model='name' no-border icon-position="behind" label="选项一" brief='描述...'></dk-radio>
        <dk-radio value="2" v-model='name' no-border icon-position="behind" label="选项二" brief='描述...'></dk-radio>
      </dk-field>

      <dk-field class="mt20" title="inline">
        <dk-cell-item title="性别" no-border>
          <dk-radio value="1" v-model='name' inline label="选项一"></dk-radio>
          <dk-radio value="2" v-model='name' inline label="选项二"></dk-radio>
        </dk-cell-item>
      </dk-field>

      <dk-field class="mt20" :title="`支付选择${paymentValue}`">
        <dk-radio value="alipay" v-model='paymentValue' no-border label="支付宝" payment="alipay" ></dk-radio>
        <dk-radio value="wechat" v-model='paymentValue' no-border label="微信" payment="wechat"></dk-radio>
      </dk-field>
    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      name: '1',
      paymentValue: 'alipay'
    }
  }
}

</script>

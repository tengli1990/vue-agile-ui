<template>
  <dk-layout class='sample-button'>
    <dk-navigation slot="header" title="表单组件"></dk-navigation>
    <template slot="content">
      <dk-field title="常规使用">
        <dk-form-item title='普通' placeholder="请输入内容" v-model='value' />
        <dk-form-item title='禁用' placeholder="请输入内容" disabled clearable v-model='value' />
        <dk-form-item title='居右' placeholder="请输入内容" align="right" v-model='value' />
        <dk-form-item title='清除' placeholder="请输入内容" clearable v-model='clearValue' />
        <dk-form-item title='高亮' placeholder="请输入内容" isHighlight v-model='value' />
        <dk-form-item title='数字' placeholder="请输入内容" type="digit" v-model='value2' />
        <dk-form-item title='价格' placeholder="请输入内容" type="money" v-model='price' />
        <dk-form-item title='保留一位小数' placeholder="请输入内容" type="money" :toFixed="1" v-model='price1' />
        <dk-form-item title='提示' placeholder="请输" brief='提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案提示文案'
          v-model='value' />
        <dk-form-item title='单位' placeholder="请输入金额" align="right" v-model='value' unit="元"></dk-form-item>

      </dk-field>

      <dk-field class="mt20" title="边框">
        <dk-form-item title='设置边框' placeholder="请输入内容" border v-model='borderItem.value1' />
      </dk-field>

      <dk-field class="mt20" title="悬浮标题">
        <dk-form-item title='浮层标题' placeholder="请输入内容" isLatent v-model='suspension.value1' />
        <dk-form-item title='浮层标题' placeholder="请输入内容" isLatent v-model='suspension.value2' />
      </dk-field>

      <dk-field class="mt20" title="表单组">
        <!-- {{group}} -->
        <dk-form-group title="在雨中">
           <dk-form-item placeholder="单价" border v-model='group.value1' unit='元' />
           <dk-form-item placeholder="数量" border v-model='group.value2' unit='套'/>
        </dk-form-group>
        <dk-form-group title="在雨中">
           <dk-form-item placeholder="价格" border v-model='group.value3' unit='元' />
           <dk-form-item placeholder="楼数" border v-model='group.value4' unit='套'/>
        </dk-form-group>
      </dk-field>

    </template>
  </dk-layout>
</template>
<script>
export default {
  data () {
    return {
      clearValue: '',
      value: '内容',
      value2: '1233',
      value1: '',
      price: 111.22,
      price1: 111.1,
      borderItem: {
        value1: ''
      },
      suspension: {
        value1: '有内容',
        value2: ''
      },
      group: {
        value1: '',
        value2: '',
        value3: '',
        value4: ''
      }

    }
  },
  mounted () {
    setTimeout(() => {
      this.value = '234234'
    }, 2000)
  }
}

</script>

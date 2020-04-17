<template>
  <dk-layout class='sample-cell-item'>
    <dk-navigation slot="header">列表单元</dk-navigation>
    <template slot="content">
      <dk-field title='基本用法'>
        <dk-cell-item title='普通标题'></dk-cell-item>
        <dk-cell-item title='标题' required sub-title="副标题"></dk-cell-item>
        <dk-cell-item title='必填' required></dk-cell-item>
        <dk-cell-item title='动作标题' arrow @click='onClick'></dk-cell-item>
        <dk-cell-item title='禁用标题' disabled no-border></dk-cell-item>
      </dk-field>

      <dk-field title="单行列表" class='mt20'>
        <dk-cell-item title='余额' content="可用余额80.00"></dk-cell-item>
        <dk-cell-item title='动作标题' content="可用余额80.00" arrow no-border></dk-cell-item>
      </dk-field>

      <dk-field title="插槽应用" class='mt20'>
        <dk-cell-item title='禁用开关'>
          <dk-switch v-model='switchValue' :options="['否','是']"></dk-switch>
        </dk-cell-item>

        <dk-cell-item title='xx数量'>
          <dk-stepper v-model='stepperValue'></dk-stepper>
        </dk-cell-item>

        <dk-cell-item title="性别">
          <dk-radio value="1" v-model='name' inline label="选项一"></dk-radio>
          <dk-radio value="2" v-model='name' inline label="选项二"></dk-radio>
        </dk-cell-item>
      </dk-field>

      <dk-field title="插槽应用" class='mt20'>
          <dk-cell-item title='展开收缩' expandable arrow="bottom" no-border>
             <div class="list" slot="children">
               <!-- <p>加载中...</p> -->
               <ul>
                 <li>栏目一</li>
                 <li>栏目二</li>
               </ul>
             </div>
          </dk-cell-item>
      </dk-field>
    </template>
    <!--

      <dk-cell-item title='禁用标题' disabled></dk-cell-item>
      <dk-cell-item title='禁用开关' disabled>
        <dk-switch v-model='switchValue' disabled :options="['否','是']"></dk-switch>
      </dk-cell-item>
      <dk-cell-item title='开关' no-border>
        <dk-switch v-model='switchValue' :options="['否','是']"></dk-switch>
      </dk-cell-item>

      <dk-cell-item title='图标用法' arrow>
        <div class="help" slot="left"></div>
        哈哈哈
      </dk-cell-item>

     -->
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      inactive: true,
      switchValue: false,
      name: 'xx',
      stepperValue: 0
    }
  },
  mounted () {

  },
  methods: {
    onClick () {
      alert('test')
    }
  }
}

</script>

<style lang='less' scoped>

</style>

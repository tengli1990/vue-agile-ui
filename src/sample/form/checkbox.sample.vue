<template>
  <dk-layout class='sample-button'>
    <dk-navigation slot="header" title="多选框"></dk-navigation>
    <template slot="content">
      <dk-field title="默认">
        <dk-checkbox value="1" v-model='value1' label="选项一"></dk-checkbox>
        <dk-checkbox value="2" v-model='value1' label="选项二"></dk-checkbox>
        <dk-checkbox value="3" v-model='value1' label="选项三"></dk-checkbox>
        <dk-checkbox value="4" v-model='value1' label="选项四"></dk-checkbox>
      </dk-field>

      <dk-field class="mt20" title="禁用">
        <dk-checkbox value="1" v-model='value2' disabled label="选项一"></dk-checkbox>
        <dk-checkbox value="2" v-model='value2' disabled label="选项二"></dk-checkbox>
        <dk-checkbox value="3" v-model='value2' label="选项三"></dk-checkbox>
        <dk-checkbox value="4" v-model='value2' label="选项四"></dk-checkbox>
      </dk-field>

      <dk-field class="mt20" title="组单选">
        <!-- {{value3}}{{valueSync3}} -->
        <dk-checkbox-group template="radio" radio inline icon-position='front'  v-model="value3" :value.sync="valueSync3" >
          <dk-checkbox value="3" label="选项三"></dk-checkbox>
          <dk-checkbox value="4" label="选项四"></dk-checkbox>
        </dk-checkbox-group>
      </dk-field>

      <dk-field class="mt20" title="多选禁用">
        <dk-checkbox-group v-model="valueArr1">
          <dk-checkbox value="1" label="选项一"></dk-checkbox>
          <dk-checkbox value="2" label="选项二"></dk-checkbox>
          <dk-checkbox value="3" disabled label="选项三"></dk-checkbox>
          <dk-checkbox value="4" disabled label="选项四"></dk-checkbox>
        </dk-checkbox-group>
      </dk-field>

      <dk-field class="mt20" title="只读">
        <dk-checkbox-group>
          <dk-checkbox active readonly label="active event" @click="onClick('active')"></dk-checkbox>
          <dk-checkbox active readonly label="active"></dk-checkbox>
          <dk-checkbox readonly label="default event" @click="onClick('default')"></dk-checkbox>
          <dk-checkbox readonly label="default"></dk-checkbox>
        </dk-checkbox-group>
      </dk-field>

      <dk-field class="mt20" title="最多选2项">
        <dk-checkbox-group v-model="valueArr2" :max="2">
          <dk-checkbox value="1" label="选项"></dk-checkbox>
          <dk-checkbox value="2" label="选项二"></dk-checkbox>
          <dk-checkbox value="3" label="选项三"></dk-checkbox>
          <dk-checkbox value="4" label="选项四"></dk-checkbox>
          <dk-checkbox value="5" label="选项"></dk-checkbox>
          <dk-checkbox value="6" label="选项二"></dk-checkbox>
          <dk-checkbox value="7" label="选项三"></dk-checkbox>
          <dk-checkbox value="8" label="选项四"></dk-checkbox>
        </dk-checkbox-group>
      </dk-field>

      <dk-field class="mt20" title="列表模板-后置图标">
        <dk-checkbox-group v-model="listValue" template='list'>
          <template v-for='(item, index) in dataList'>
            <dk-checkbox :key='index' :value="item.id">{{item.name}}</dk-checkbox>
          </template>
        </dk-checkbox-group>
      </dk-field>

      <dk-field class="mt20" title="列表模板-前置图标">
        <dk-checkbox-group v-model="listValue" template='list' icon-position="front">
          <template v-for='(item, index) in dataList'>
            <dk-checkbox :key='index' :value="item.id">
              {{item.name}}
             <div slot='right' @click.stop class="">详情 <dk-icon name="arrow-right"></dk-icon></div>
            </dk-checkbox>
          </template>
        </dk-checkbox-group>
      </dk-field>

    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      value1: '2',
      value2: '3',
      value3: ['3'],
      valueSync3: '',
      valueArr1: ['1', '2', '3', '4'],
      valueArr2: [],
      listValue: [],
      dataList: [{
        id: 1,
        name: '选项一'
      },
      {
        id: 2,
        name: '选项二'
      }
      ]
    }
  },
  methods: {
    onClick (type) {
      alert(type)
    }
  }
}

</script>

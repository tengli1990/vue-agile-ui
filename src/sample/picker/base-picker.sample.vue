<template>
  <dk-layout class='sample-base-picker'>
    <dk-navigation slot="header" title="picker选择器"></dk-navigation>
    <template slot="content">
      <dk-field title="单选">
        <dk-button @click="onSelect">单选</dk-button>
      </dk-field>

      <dk-field title="选择日期">
        <dk-button @click="onPickerDate">日期</dk-button>
      </dk-field>
    </template>
    <dk-base-picker ref="picker1" :textTitle="picker1.textTitle" :data="picker1.data"
      :anchor="picker1.anchor" @confirm="onSelectConfirm" />

    <dk-base-picker ref="picker3" :textTitle="picker3.textTitle" :type="picker3.type" :anchor="picker3.anchor"
      @confirm="onPicker3Confirm" />

  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      picker1: {
        anchor: [],
        textTitle: '选择城市',
        data: [
          {
            id: 1,
            value: '北京'
          },
          {
            id: 2,
            value: '上海'
          }
        ]
      },
      picker3: {
        anchor: [],
        textTitle: '日期选择器(内置)',
        type: 'date'
      }
    }
  },
  methods: {
    onSelect () {
      this.$refs['picker1'].show()
    },
    onSelectConfirm (res) {
      console.log(res)
    },
    onPickerDate () {
      this.$refs['picker3'].show()
    },
    onPicker3Confirm () {

    }
  }
}

</script>

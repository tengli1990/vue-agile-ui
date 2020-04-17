<template>
  <dk-layout class="sample-stepper">
    <dk-navigation slot="header">步进器</dk-navigation>
    <template slot="content">
      <dk-field :title="`默认${value1}`">
        <dk-stepper v-model="value1"></dk-stepper>
      </dk-field>

      <dk-field class="mt20" :title="`小数点${value2}`">
        <dk-stepper v-model="value2" step="2.5" max="20"></dk-stepper>
      </dk-field>

      <dk-field class="mt20" :title="`限制步骤数+最大限制${value3}`">
        <dk-stepper v-model="value3" step="3" max="20"></dk-stepper>
      </dk-field>

      <dk-field class="mt20" :title="`禁止输入${value4}`">
        <dk-stepper v-model="value4" readonly step="1" max="20"></dk-stepper>
      </dk-field>

      <dk-field class="mt20" :title="`禁用${value5}`">
        <dk-stepper disabled v-model="value5" step="3" max="20"></dk-stepper>
      </dk-field>
    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      value1: 0,
      value2: 1,
      value3: 1,
      value4: 1,
      value5: 1
    }
  },
  mounted () {
    setTimeout(() => {
      this.value1 = 12
    }, 2000)
  }
}

</script>

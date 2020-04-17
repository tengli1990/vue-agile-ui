<template>
  <dk-layout class="sample-switch">
    <dk-navigation slot="header">开关</dk-navigation>
    <template slot="content">
      <dk-field title="默认">
        <dk-switch v-model='value0'></dk-switch>
      </dk-field>
      <dk-field
        class='mt20'
        title="自定义返回值"
      >
        <dk-switch
          v-model='value1'
          :options="['否','是']"
          inline
        ></dk-switch>
      </dk-field>

      <dk-field
        class='mt20'
        title="禁用"
      >
        <dk-switch
          v-model='value2'
          disabled
          inline
        ></dk-switch>
        <dk-switch
          v-model='value3'
          disabled
          inline
        ></dk-switch>
      </dk-field>

      <dk-field
        class='mt20'
        title="自定义value && 自定义text"
      >
        <dk-switch
          v-model='value4'
          match-field='text'
          :options="[{code:1,text:'否'},{code:2,text:'是'}]"
        ></dk-switch>
        {{value4}}
      </dk-field>

      <dk-field
        class='mt20'
        title="显示文案"
      >
        <dk-switch
          v-model='value5'
          :options="['否','是']"
          inline
        >{{value5}}</dk-switch>
        <dk-switch
          v-model='value6'
          show-text
          inline
        ></dk-switch>
        <dk-switch
          v-model='value7'
          :text="['无','有']"
          show-text
          inline
        ></dk-switch>
      </dk-field>

    </template>

  </dk-layout>
</template>
<script>
export default {
  data () {
    return {
      value0: '',
      value1: '是',
      value2: '',
      value3: true,
      value4: {
        code: 2
      },
      value5: '',
      value6: '',
      value7: ''
    }
  },
  created () {
    setTimeout(() => {
      this.value2 = {
        code: 1
      }
    }, 2000)
  }
}

</script>

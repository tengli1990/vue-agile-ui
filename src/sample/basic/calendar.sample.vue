<template>
<div>
  <dk-navigation slot="header" title="日历组件">
      <!-- <div slot='right' class="text" @click="onLookMarkdown">文档说明</div> -->
    </dk-navigation>
    <dk-calendar
    ref="Calendar"
    v-on:isToday="clickToday"
    agoDayHide="1530115221"
    v-on:choseDay="clickDay"
    v-on:changeMonth="changeDate"
    :selectType="selectType"
  ></dk-calendar>
</div>

</template>
<script>
export default {
  data () {
    return {
      selectType: 'more'
    }
  },
  methods: {
    clickDay (data) {
      this.data = data
      console.log('选中了', this.data)
    },
    clickToday (data) {
      //   this.data = data

      //   console.log("跳到了本月今天", data); //跳到了本月
    },
    changeDate (data) {
      //   this.data = data
      //   this.$toast("切换到的月份为" + data);
    },
    confirm () {
      this.$emit('confirm', this.data)
    },
    cancle () {
      this.$emit('cancle')
    }
  }
}
</script>

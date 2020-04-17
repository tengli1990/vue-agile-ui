<template>
  <div class="dk-text-area">
    <dk-navigation slot="header" title="文本域组件">
      <!-- <div slot='right' class="text" @click="onLookMarkdown">文档说明</div> -->
    </dk-navigation>
    <dk-text-area
      :placeholder="placeholder"
      v-model="value"
      :maxlength='25'
    >

    </dk-text-area>
    <p v-if="value">您输入的内容为: {{value}}</p>

    <!-- 禁用态 -->
    <p>禁用态</p>
    <dk-text-area
      :placeholder="placeholder"
      v-model="value1"
      :disabled="true"
    >
    </dk-text-area>

    <!-- 禁用态 -->
    <p>字符串提示</p>
    <dk-text-area
      :placeholder="placeholder"
      v-model="value2"
      tipsType='string'
    >
    </dk-text-area>
  </div>
</template>
<script>
export default {
  data () {
    return {
      placeholder: '请输入内容',
      value: '',
      value1: '你是小傻瓜，生气不，你还改不了',
      value2: '你是小傻瓜，这个你可以改哦～'
    }
  }
}
</script>
<style lang="less" scoped>
.dk-text-area{
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 15px;

  p{
    color: #666666;
    margin: 20px 0;
  }
}
</style>

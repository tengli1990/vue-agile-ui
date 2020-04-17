<template>
  <div class="m-button-group" :class="[layout,align]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'agile-button-group',
  props: {
    layout: {
      type: String,
      default: 'flex'
    },
    align: {
      type: String,
      default: 'center'
    }
  },
  computed: {
    disabledClass () {
      return {
        disabled: this.disabled
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang='less'>

</style>

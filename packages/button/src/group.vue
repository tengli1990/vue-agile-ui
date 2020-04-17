<template>
  <div class="m-button-group" :class="[layout,align]">
    <slot></slot>
  </div>
</template>

<script>
const COMPONENT_NAME = 'dk-button-group'
export default {
  name: COMPONENT_NAME,
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

<template>
  <transition :name="transitionName">
    <keep-alive v-if="keepAlive">
       <router-view class="m-view" :class="childClass" :custom="custom"></router-view>
    </keep-alive>
    <router-view v-else class="m-view" :class="childClass" :custom="custom"></router-view>
  </transition>
</template>

<script>
export default {
  name: 'agile-view',
  props: {
    child: {
      type: [Boolean],
      default: false
    },
    keepAlive: {
      type: Boolean,
      default: false
    },
    move: {
      type: String,
      default: 'right'
    },
    custom: {
      type: [String, Object, Array, Number, Function],
      required: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    childClass () {
      return {
        'is-child': this.child
      }
    },
    transitionName () {
      return this.child ? 'm-view-child-' + this.move : 'm-view-' + this.move
    }

  }
}
</script>

<style lang="less">

</style>

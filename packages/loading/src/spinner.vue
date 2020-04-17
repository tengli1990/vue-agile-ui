<template>
  <div class="m-spinner" :class="initClass">
    <span class="m-spinner-list">
      <i class="m-spinner-item" v-for="fragment in fragments" :key="fragment"></i>
    </span>
    <span class="m-spinner-text" v-if="$slots.default">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'dk-spinner',
  props: {
    size: {
      type: String,
      default: 'standard'
    },
    color: {
      type: String,
      default: 'dark',
      validator (val) {
        return val === 'dark' || val === 'light' || val === 'white'
      }
    }
  },
  computed: {
    initClass () {
      return {
        'is-light': this.color === 'light',
        [`is-${this.size}`]: true
      }
    }
  },
  data () {
    return {
      // 表示设置 loading 的瓣数，默认为12
      fragments: 12
    }
  }
}

</script>

<template>
  <i :class='"m-icon dkfonts icon-"+name' :style="setStyle" @click="onClick()"></i>
</template>

<script>
export default {
  name: 'dk-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '' // md
    }
  },
  computed: {
    setStyle () {
      return {
        color: this.color
      }
    }
  },
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}

</script>

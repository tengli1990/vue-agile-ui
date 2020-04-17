<template>
  <div class="m-list-body" @click="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'list-body',
  props: {
    data: {
      type: Object
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.data)
    }
  }
}
</script>

<template>
  <div class="m-list">
    <template v-for="(item, index) in data">
      <list-body :data="item" :key="index" @click="onClick">
        <slot></slot>
      </list-body>
    </template>

  </div>
</template>

<script>
import ListBody from './list-body'
export default {
  name: 'dk-list',
  components: { ListBody },
  props: {
    data: {
      type: Array,
      required: true,
      default () {
        return []
      }
    }
  },
  data () {
    return {

    }
  },
  methods: {
    onClick (a) {
      this.$emit('click', a)
    }
  }
}
</script>

<template>
  <div class="m-form-group">
    <div class="m-form-group-title" v-if="title">
      {{title}}
    </div>
    <div class="m-form-group-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dk-form-group',
  provide: {
    rootGroup: {
      default: null
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

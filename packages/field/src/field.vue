<template>
  <fieldset class='m-field'>
    <header class="m-field-header" :class="[initClass]">
       <div class="m-field-info">
          <legend class="m-field-tiitle">{{title}}</legend>
          <p class="m-field-brief">{{brief}}</p>
       </div>
       <div class="m-field-action" v-if="$slots.action">
          <slot name="action"></slot>
       </div>
    </header>
    <div class="m-field-content">
        <slot></slot>
    </div>
    <footer class="m-field-footer" v-if="$slots.footer">
       <slot name="footer"></slot>
    </footer>
  </fieldset>
</template>

<script>
export default {
  name: 'dk-field',
  props: {
    title: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    },
    headerLine: {
      type: Boolean,
      default: false
    },
    /**
     * child contral
     */
    labelWidth: {
      type: String,
      default: ''
    },
    /**
     * child contral
     */
    align: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      rootField: this
    }
  },
  data () {
    return {

    }
  },
  computed: {
    initClass () {
      return {
        'has-header-line': this.headerLine
      }
    }
  },
  methods: {

  }
}

</script>

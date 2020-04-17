<template>
  <div class='m-detail-item' :class="[initClass,size]">
    <div class="m-detail-item-body">
      <div class="m-detail-title" :style="setTitleStyle" v-if='title'>{{title}}</div>
      <div class="m-detail-content" :class="setContentClass">
        <slot>{{content}}</slot>
      </div>
    </div>
    <div class="m-detail-item-bottom" v-if="$slots.bottom">
        <slot name='bottom'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dk-detail-item',
  inject: {
    rootField: {
      default: null
    }
  },
  props: {
    bold: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleBold: {
      type: Boolean,
      default: false
    },
    middle: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '' // small / large
    },
    line: {
      type: Boolean,
      default: false
    },
    clamp: {
      type: Number,
      default: 0
    },
    labelWidth: {
      type: String,
      default: ''
    }
  },
  data () {
    return {

    }
  },
  computed: {
    initClass () {
      return {
        'is-bold': this.bold,
        'is-middle': this.middle,
        'is-line': this.line,
        'has-title': this.title,
        'is-title-bold': this.titleBold

      }
    },
    setContentClass () {
      return {
        ['clamp-' + this.clamp]: this.clamp,
        ['align-' + (this.align || (this.rootField && this.rootField.align) || 'right')]: this.align || (this.rootField && this.rootField.align) || ''
      }
    },
    setTitleStyle () {
      return {
        'width': this.labelWidth || (this.rootField ? this.rootField.labelWidth : ''),
        'min-width': this.labelWidth || (this.rootField ? this.rootField.labelWidth : '')
      }
    }
  },
  methods: {

  }
}

</script>

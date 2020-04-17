<template>
    <button class='m-button' :style="customWidth" :class="[invalidateClass,initClassName]" :disabled="disabled" @click="clicked">
       <template v-if='text'>
          {{text}}
       </template>
        <slot v-else></slot>
    </button>
</template>

<script>
export default {
  name: 'agile-button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    text: {
      type: [String, Number],
      default: ''
    },
    width: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    invalidateClass () {
      return {
        'is-disabled': this.disabled,
        'is-inactive': this.inactive,
        'is-inline': this.inline
      }
    },
    customWidth () {
      return {
        'width': this.width
      }
    },
    initClassName () {
      const includeString = ['primary', 'warning', 'danger', 'outline', 'disabled', 'small', 'smaller', 'large', 'larger', 'round']
      const name = this.type.replace(/\s*(\w+)/g, function (m, c) {
        if (!c || !includeString.includes(c)) {
          return c
        }
        return `m-button-${c},`
      })
      return name.split(',').join(' ')
    }
  },
  data () {
    return {

    }
  },
  methods: {
    clicked () {
      if (this.disabled || this.inactive) {
        return
      }
      this.$emit('click')
    }
  }
}
</script>

<style lang='less'>

</style>

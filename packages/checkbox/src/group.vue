<template>
  <div class='m-checkbox-group' :class="[initClass]">
    <slot></slot>
  </div>
</template>

<script>
import Checkbox from './index.vue'
export default {
  name: 'dk-checkbox-group',
  components: {
    [Checkbox.name]: Checkbox
  },
  props: {
    value: {
      type: [Array],
      default: () => {
        return []
      }
    },
    max: {
      type: Number,
      default: 100
    },
    inline: {
      type: Boolean,
      default: false
    },
    template: {
      type: String,
      default: 'tag' // tag | list | radio
    },
    radio: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'behind' // front | behind
    }
  },
  provide () {
    return {
      rootGroup: this
    }
  },
  computed: {
    initClass () {
      return {
        'is-inline': this.inline
      }
    }
  },
  mounted () {
    console.log(this.$slots)
  },
  methods: {
    unCheck (val) {
      this.value.splice(this.value.indexOf(val), 1)
    },
    check (val) {
      if (this.max && this.value.length >= this.max) {
        return
      }
      // radio
      if (this.radio) {
        this.value.splice(0)
        this.$emit('update:value', val)
      }
      this.value.push(val)
    },
    onClick (val) {
      if (this.value.indexOf(val) === -1) {
        this.check(val)
      } else {
        this.unCheck(val)
      }
      this.$emit('input', this.value)
    }
  }
}

</script>

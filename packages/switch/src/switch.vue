<template>
  <div class="m-switch" :class="initClass" @click="onClick">
    <slot>
      <template v-if="showText">
        {{text[+this.getActive()]}}
      </template>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'dk-switch',
  props: {
    value: {
      type: null,
      default: false
    },
    options: {
      type: Array,
      default: () => {
        return [false, true]
      }
    },
    matchField: {
      type: [String, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    text: {
      type: [Array],
      default () {
        return ['否', '是']
      }
    },
    inline: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  data () {
    return {
      isActive: this.getActive()
    }
  },
  computed: {
    initClass () {
      return {
        'active': this.getActive(),
        'disabled': this.disabled,
        'is-inline': this.inline
      }
    }
  },
  watch: {
    value (newVal) {
      let ret = newVal
      if (!this.options.structures(newVal)) {
        ret = this.options[+this.getActive()]
      }
      this.$emit('change', ret)
    }
  },
  created () {
    this.$emit('change', this.options[+this.getActive()])
  },
  methods: {
    onClick () {
      if (this.disabled) {
        return
      }
      this.$emit('change', this.options[+!this.getActive()])
    },
    getActive () {
      let index
      if (this.matchField) {
        let fieldValueArr = this.fieldArr(this.matchField)
        let fieldValue = this.value[this.matchField]
        if (!fieldValue || fieldValueArr.indexOf(fieldValue) !== 1) {
          index = 0
        } else {
          index = 1
        }
        return !!index
      }

      if (!this.value || this.options.indexOf(this.value) !== 1) {
        index = 0
      } else {
        index = 1
      }
      return !!index
    },
    fieldArr (field) {
      let arr = []
      for (let key in this.options) {
        arr.push(this.options[key][field])
      }
      return arr
    }
  }
}

</script>

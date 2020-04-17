<template>
  <div class='m-cell-item px-cell-item' @click='onClick'>
    <div class="m-cell-item-body px-cell-item-body" :class="[itemInitClass,vertical]">
      <div class="m-cell-item-left" v-if="$slots['left']">
        <slot name='left'></slot>
      </div>
      <div class="m-cell-item-content">
        <p class="m-cell-item-title">
          <span class='m-cell-item-title-text' :class="{'is-required':required}">{{title}}</span>
          <span class='m-cell-item-sub-title'>{{subTitle}}</span>
        </p>
        <p class="m-cell-item-brief" v-if='brief'>{{brief}}</p>
      </div>
      <div class="m-cell-item-right">
        <template v-if='content'>
          {{content}}
        </template>
        <slot v-else></slot>
        <i class="arrow dkfonts " :class="setArrow" v-if='arrow'></i>
      </div>
    </div>
    <div class="m-cell-item-children" v-if="$slots['children']"
      v-show="expandableValue === false || expandableValue==='open'">
      <slot name='children'></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agile-cell-item',
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    brief: {
      type: String,
      default: ''
    },
    content: {
      type: [String, Number],
      default: ''
    },
    arrow: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: String,
      default: 'center'
    },
    expandable: {
      type: [Boolean, String],
      default: false
    }
  },
  data () {
    return {
      expandableValue: this.expandable,
      arrowValue: this.arrow
    }
  },
  computed: {
    itemInitClass () {
      return {
        'no-border': this.noBorder,
        'is-disabled': this.disabled
      }
    },
    setArrow () {
      if (this.arrowValue) {
        if (typeof this.arrowValue === 'boolean') {
          return 'icon-arrow-right'
        }
        return 'icon-arrow-' + this.arrowValue
      }
      return this.arrowValue
    }
  },
  mounted () {
    // console.log(this)
  },
  methods: {
    onClick () {
      if (this.expandableValue !== false) {
        if (this.expandableValue !== 'open') {
          this.expandableValue = 'open'
          this.arrowValue = 'top'
        } else {
          this.expandableValue = 'close'
          this.arrowValue = 'bottom'
        }
      }
      this.$emit('click')
    }
  }
}

</script>

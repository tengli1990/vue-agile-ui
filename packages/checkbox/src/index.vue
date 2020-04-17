<template>
  <div class="m-checkbox" :class="[setInitClass,getTemplate]" @click='onClick()'>
    <div class="m-checkbox-left">
      <template v-if=" geticonPositionPos === 'front'">
        <agile-icon class="selected" v-if="isActive" name="selected" />
        <agile-icon class="un-selected" v-else name="unselect"> />
      </template>

    </div>
    <div class="m-checkbox-label">
      <p class="m-checkbox-label-title"><slot>{{label}}</slot></p>
      <p class="m-checkbox-label-brief">{{brief}}</p>
    </div>
    <div class="m-checkbox-right">
      <slot name="right"></slot>
      <template v-if=" geticonPositionPos === 'behind'">
        <agile-icon class="selected" v-if="isActive" name="selected" />
        <agile-icon class="un-selected" v-else name="unselect" />
      </template>
    </div>
  </div>
</template>
<script>
import Icon from '../../icon'
export default {
  components: {
    [Icon.name]: Icon
  },
  name: 'agile-checkbox',
  inject: {
    rootGroup: {
      default: null
    }
  },
  props: {
    value: '',
    name: '',
    label: {
      type: String
    },
    brief: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  model: {
    prop: 'name',
    event: 'input'
  },
  computed: {
    setInitClass () {
      return {
        'is-active': this.active || (this.value && this.name === this.value) || (this.rootGroup && this.rootGroup.value.indexOf(this.value) !== -1),
        'is-inline': this.inline,
        'is-disable': this.disabled || (this.rootGroup && this.rootGroup.value.length === this.rootGroup.max && !this.rootGroup.value.includes(this.value))
      }
    },
    isActive () {
      return this.name === this.value || (this.rootGroup && this.rootGroup.value.indexOf(this.value) !== -1)
    },
    getTemplate () {
      if (!this.rootGroup) {
        return false
      }
      return this.rootGroup.template || 'tag'
    },
    geticonPositionPos () {
      const iconArr = ['list', 'radio']
      if (!this.rootGroup || !iconArr.includes(this.rootGroup.template)) {
        return false
      }
      return this.rootGroup.iconPosition || 'front'
    }
  },
  methods: {
    onClick () {
      if (this.disabled || this.readonly) {
        this.$emit('click')
        return
      }
      let result
      if (this.name === this.value) {
        result = ''
      } else {
        result = this.value
      }
      if (this.rootGroup) {
        this.rootGroup.onClick(this.value)
      }
      this.$emit('input', result)
      this.$emit('click')
    }
  }
}

</script>

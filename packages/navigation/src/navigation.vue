<template>
  <div class="m-navigation" :class="[template]" >
    <div class="m-navigation-top-bar"></div>
    <div class="m-navigation-body" :class="[initBodyClass]">
      <div class="m-navigation-left">
        <!-- <dk-icon class='m-back' name="return" @click="onBack()"></dk-icon> -->
        <span class='m-back' @click="onBack()">返回</span>
        <slot name='left'></slot>
      </div>
      <div class="m-navigation-title">
        <slot>{{title}}</slot>
      </div>
      <div class="m-navigation-right">
        <slot name='right'></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dk-navigation',
  props: {
    title: {
      type: String,
      default: ''
    },
    fixed: {
      type: Boolean,
      default: false
    },
    template: {
      type: String,
      defualt: ''
    },
    backUrl: {
      type: String
    },
    backClose: {
      type: Boolean,
      default: false
    },
    backCustom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    initBodyClass () {
      return {
        'is-fixed': this.fixed
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    onBack () {
      this.$router.go(-1)
    }
  }
}

</script>

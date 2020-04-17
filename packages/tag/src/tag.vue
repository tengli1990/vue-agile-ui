<template>
  <div class='m-tag' >
    <div class="m-tag-content" :class="initClass" :style='setTagStyle'>
      <slot>{{text}}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'agile-tag',
  props: {
    shape: {
      type: String,
      default: 'fillet' // fillet（圆角） sharp(尖角)
    },
    sharp: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary'
    },
    fill: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    outline: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }

  },
  data () {
    return {

    }
  },
  computed: {
    setTagStyle () {
      return {
        background: this.fill,
        color: this.color
      }
    },
    initClass () {
      return {
        ['is-' + this.shape]: this.shape,
        ['sharp-' + this.sharp]: this.sharp,
        ['type-' + this.type]: true,
        'is-outline': this.outline

      }
    }
  },
  methods: {

  }

}

</script>

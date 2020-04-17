<template>
  <div class="m-list-item" :class="[initClass,initBaseClass]">
      <!-- header -->
      <template v-if='hasHeader'>
          <div class="m-list-header-title">
             <span class="header-title__label">{{headersData.titleLabel}}</span><span class="header-title__value">{{headersData.title}}</span>
             <span class="header-sub__value">{{headersData.subTitle}}</span>
          </div>
          <div class="m-list-header-right">
             <dk-tag shape="cycle" sharp="left-bottom" v-if="headersData.tag" :fill="getTagFillColor(headersData.tag)">{{headersData.tag}}</dk-tag>
          </div>
      </template>

      <!-- footer -->
      <template v-else-if='hasFooter'>

      </template>

      <!-- content -->
      <template v-else>
        <span class="content__label" v-if="contentData.label">{{contentData.label}}</span><span class="content__value" :class="`clamp-${clamp}`">{{contentData.value}}</span>
      </template>
  </div>
</template>

<script>

export default {
  name: 'dk-list-column',
  props: {
    type: {
      type: String,
      default: ''
    },
    column: {
      type: [Number, String],
      default: 3
    },
    header: Boolean,
    footer: Boolean,
    bottomLine: Boolean,
    bold: Boolean,
    clamp: {
      type: [Number, String],
      default: 1
    },
    tagColors: {
      type: Array,
      default () {
        return ['green', 'red', 'pink']
      }
    },
    tagStatus: {
      type: Array,
      default () {
        return ['申请中', '已完成', '待审核']
      }
    },
    tagConfig: {
      type: Object,
      default () {
        return {
          shape: 'cycle',
          sharp: 'left-bottom',
          fill: null
        }
      }
    }
  },
  data () {
    return {
      attrs: this.$attrs,
      headersData: {},
      contentData: {}
    }
  },
  computed: {
    initBaseClass () {
      return {
        'is-bold': this.bold
      }
    },
    initClass () {
      if (this.header || this.footer) {
        return {
          'has-header': this.header,
          'has-footer': this.footer,
          'has-bottom-line': this.bottomLine
        }
      }
      return {
        [`column-${this.column}`]: true,
        'has-content': true
      }
    },
    data () {
      return this.$parent.data
    },
    hasHeader () {
      return this.header
    },
    hasFooter () {
      return this.footer
    }
  },
  created () {
    this.initHeader()
    this.initContent()
  },
  methods: {
    getDataValue (name) {
      let field = this.$attrs[name]
      if (field) {
        return this.data[field]
      }
      return field
    },
    getAttrValue (name) {
      return this.$attrs[name]
    },
    initHeader () {
      if (!this.header) {
        return
      }
      let title = this.getDataValue('title')
      let titleField = this.getAttrValue('title')
      let subTitle = this.getDataValue('sub-title')
      let titleLabel = this.getAttrValue(`${titleField}-label`) || null
      let tag = this.getDataValue('tag')
      this.headersData = {
        title: title,
        titleLabel: titleLabel,
        subTitle: subTitle,
        tag: tag
      }
    },
    initContent () {
      const { label, prop } = this.$attrs
      if (!prop) {
        return
      }
      this.contentData = {
        label: label,
        value: this.data[prop]
      }
    },
    getTagFillColor (name) {
      return this.tagColors[this.tagStatus.indexOf(name)]
    }
  }
}
</script>

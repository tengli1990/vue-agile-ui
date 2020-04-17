<template>
  <div class="m-steps" :class="[initClass]">
    <div class="m-step-item" v-for="(item,index) in value" :key="index">
      <div class="m-step-body">
        <div class="icon-wrap">
          <!-- <dk-icon name='duigou'></dk-icon> -->
        </div>
        <div class="bar"></div>
        <div class="content-wrap">
          <div class="m-step-title">{{item[field.name]}}</div>
          <div class="m-step-brief" v-html="getBriefHtml(item[field.brief])"></div>
          <div class="m-step-time">{{item[field.time]}}</div>
          <div class="m-step-tab" v-if="item[field.tab] || item[setField.tab]" ><span @click="onClick(item,index)">{{item[field.tab] || item[setField.tab]}}</span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'agile-steps',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    first: {
      type: Boolean,
      default: false
    },
    last: {
      type: Boolean,
      default: false
    },
    setField: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
      steps: this.value
    }
  },
  computed: {
    initClass () {
      return {
        'is-first-active': this.first,
        'is-last-active': this.last
      }
    },
    field () {
      let ret = {
        name: 'name',
        brief: 'brief',
        time: 'time',
        tab: 'tab'
      }

      return Object.assign(ret, this.setField)
    }
  },
  watch: {
    steps (newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    getBriefHtml (brief) {
      if (brief) {
        return brief.replace(/\n/g, '<br>')
      }
      return brief
    },
    onClick (item, index) {
      this.$emit('click', {
        item,
        index
      })
    }
  }
}

</script>

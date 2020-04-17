<template>
    <div class='m-layout'>
        <header class='m-layout-header' v-if="$slots.header">
            <slot name='header'></slot>
        </header>
        <section class="m-layout-content">
            <slot name='content'></slot>
        </section>
        <footer class="m-layout-footer" v-if="$slots.footer">
             <slot name='footer'></slot>
        </footer>

        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'agile-layout',
  data () {
    return {

    }
  },
  methods: {

  },
  update () {

  }
}
</script>

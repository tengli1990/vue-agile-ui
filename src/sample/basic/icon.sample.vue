<template>
  <dk-layout class='notice-sample'>
    <dk-navigation slot="header">图标管理</dk-navigation>
    <template slot='content'>
      <div class="sample-icon">
        <template v-for="(icon,index) in iconList">

          <div :key="index" class="icon-box">
            <div class="icon">
              <dk-icon :name="icon.name"></dk-icon>
            </div>
            <p class="name">{{icon.name}}</p>
          </div>

        </template>
      </div>
    </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      iconList: [{
        name: 'arrow-right'
      },
      {
        name: 'arrow-top'
      },
      {
        name: 'arrow-bottom'
      },
      {
        name: 'arrow-left'
      },
      {
        name: 'close'
      },
      {
        name: 'close-solid'
      },
      {
        name: 'selected'
      },
      {
        name: 'date-time'
      },
      {
        name: 'filter'
      },
      {
        name: 'notice'
      },
      {
        name: 'exclamation-outline'
      }

      ]
    }
  }
}

</script>

<style lang='less' scoped>
  .sample-icon {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    .icon-box {
      width: 25%;
      height: 220px;
      background: #f5f5f5;
      border: 2px solid #fff;

      .icon {
        height: 120px;
        text-align: center;

        .dkfonts {
          font-size: 60px;
        }

        line-height:120px;
      }

      .name {
        text-align: center;
        word-break: break-all;
      }
    }
  }

</style>

<template>
  <div>
    <div class="project-title">蛋壳组件库</div>
    <section class='example-content'>
      <!-- <div class="page-index-banner">
        <div class="project-info">
          <div class="list">组件分类：{{getPageNum}}</div>
          <div class="list">组件数量：{{getModuleNum}}</div>
        </div>
      </div> -->
      <div class="module-list">
        <template v-for='(item, index) in setRouters'>
          <ul :key="index" v-if="item.meta.hidden===false">
            <div class="module-titles">{{item.name}}</div>
            <template v-for="(sample, idx) in item.children">
              <li v-if="!(sample.meta&&sample.meta.hide)" class='items' :key="idx" @click="jump(sample)">
                <div class='name'>{{sample.name.replace(/.*-/,'')}}</div>
                <!-- <div class='status' :class="[sample.procress]">查看组件</div> -->
                <div class='right'><i class="arrow dkfonts icon-arrow-right"></i></div>
              </li>
            </template>
          </ul>
        </template>

      </div>
      <dk-view child></dk-view>
    </section>

  </div>
</template>

<script>
import Routers from '@/router/routers.js'

export default {
  name: 'APP',
  data () {
    return {
      projectName: 'Vue Super Ui',
      projectInfo: {
        pageNum: 0,
        moduleNum: 0
      },
      routers: []
    }
  },
  computed: {
    setRouters () {
      let obj = {}
      let arr = []
      let lv = 1
      const splicing = (r, i) => {
        r.map((router, index) => {
          let moduleName = router.name.match(/[\u4e00-\u9fa5 || \w]*/)
          if (obj[moduleName]) {
            obj[moduleName].name = moduleName[0]
            obj[moduleName].meta = router.meta || {
              hidden: false
            }
            obj[moduleName].children.push(router)
          } else {
            obj[moduleName] = {
              name: moduleName[0],
              children: [router],
              meta: router.meta || {
                hidden: false
              }
            }
          }
          if (router.children && router.children.length) {
            router.children.map(c => {
              c.child = true
              c.childLv = ++lv
            })
            splicing(router.children, index)
          }
        })
      }
      splicing(Routers, null)

      for (let key in obj) {
        arr.push(obj[key])
      }
      // arr.push(obj)
      // console.log(arr)
      console.log(process.env.NODE_ENV)
      return arr
    },
    getPageNum () {
      return this.setRouters.length
    },
    getModuleNum () {
      let ret = 0
      for (let i = 0; i < this.setRouters.length; i++) {
        ret += this.setRouters[i].children.length
      }
      return ret
    }
  },
  methods: {
    jump (sample) {
      // da.send('http://127.0.0.1:9999/log', 'param=123&name="zhangsan"')
      this.$router.push({
        path: sample.path
      })
    }
  }
}

</script>

<style lang='less'>
  * {
    margin: 0;
    padding: 0;
  }

  .project-title {
    font-size: 34px;
    text-align: center;
    height: 100px;
    line-height: 100px;
  }

  .example-content {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .page-index-banner {
    // padding: 30px;
    height: 300px;
    // background: linear-gradient(45deg, #3dc69ab3, #036875);
    // background: url("./assets/sample/banner.jpg") no-repeat scroll left top / 100%
    //   100%;
  }

  .project-info {
    display: flex;
  }

  .project-info>* {
    flex: 1;
    min-width: 50%;
    padding: 5px 0;
    color: #fff;
    font-size: 28px;
  }

  .module-list {
    flex: 1px;
    background: #fff;

    .module-titles {
      padding: 20px 30px;
      font-size: 32px;
      color: #999;
      background: #f7f7f7;
    }

    ul {
      .items {
        line-height: 1.2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 28px;
        color: #666;
        padding: 32px 30px;
        background: #fff;
        border-bottom: 1px solid #e2e4ea;

        &:last-child {
          border: none;
        }

        >.name {
          flex: 1;
        }

        .status {
          color: #fff;
          background: #3dbcc6;
          border-radius: 5px;
          font-size: 20px;
        }

        .right {
          padding-left: 20px;
        }

        .arrow {
          font-size: 38px;
          color: #999;
        }
      }
    }
  }

</style>

<template>
  <div>
    <section>
      <dk-button className="primary mt20" @click="toShow">打开单列picker</dk-button>
      <dk-form-item title='单列picker' placeholder="" :brief="brief" />

      <dk-picker :show="show" :columns="columns" :defaultData="defaultData" :selectData="pickData" @cancel="close"
        @confirm="confirmFn"></dk-picker>
    </section>
    <!--  二列picker-->
    <section>
      <dk-button className="primary mt20" @click="toShow2">打开双列picker</dk-button>
      <dk-form-item title='双列picker' placeholder="" :brief="brief2" />

      <dk-picker :show="show2" :columns="columns2" :defaultData="defaultData2" :selectData="pickData2" @cancel="close2"
        @confirm="confirmFn2"></dk-picker>
    </section>

    <!--  三列picker-->
    <section>
      <dk-button className="primary mt20" @click="toShow3">打开三列picker</dk-button>
      <dk-form-item title='三列picker' placeholder="" :brief="brief3" />

      <dk-picker :show="show3" :columns="columns3" :defaultData="defaultData3" :selectData="pickData3" @cancel="close3"
        @confirm="confirmFn3"></dk-picker>
    </section>

    <!--三列联动picker-->
    <section>
      <dk-button className="primary mt20" @click="toShow4">打开三列联动picker</dk-button>
      <dk-form-item title='三列联动picker' placeholder="" :brief="brief4" />

      <dk-picker :show="show4" :columns="columns4" :selectData="pickData4" @cancel="close4" :link="link"
        @confirm="confirmFn4"></dk-picker>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      columns: 1,
      defaultData: [{
        text: 1999,
        value: 1999
      }],
      pickData: {
        // 第一列的数据结构
        data1: [{
          text: 1999,
          value: 1999
        },
        {
          text: 2001,
          value: 2001
        },
        {
          text: 2002,
          value: 2002
        },
        {
          text: 2003,
          value: 2003
        },
        {
          text: 2004,
          value: 2004
        },
        {
          text: 2005,
          value: 2005
        }
        ]
      },
      brief: '',
      brief2: '',
      show2: false,
      columns2: 2, // 两列
      defaultData2: [ // 默认显示那个字段
        {
          text: '水果',
          value: 2001
        },
        {
          text: '香蕉',
          value: 105
        }
      ],
      pickData2: {
        // 第一列数据结构
        data1: [{
          text: '数码',
          value: 1999
        },
        {
          text: '水果',
          value: 2001
        },
        {
          text: '衣服',
          value: 2002
        }
        ],
        // 第二列数据结构
        data2: [{
          text: '苹果',
          value: 104
        },
        {
          text: '香蕉',
          value: 105
        },
        {
          text: '西红柿',
          value: 106
        }
        ]
      },
      brief3: '',
      show3: false,
      columns3: 3, // 两列
      defaultData3: [ // 默认显示那个字段
        {
          text: '水果',
          value: 2001
        },
        {
          text: '香蕉',
          value: 105
        }
      ],
      pickData3: {
        // 第一列数据结构
        data1: [{
          text: '数码',
          value: 1999
        },
        {
          text: '水果',
          value: 2001
        },
        {
          text: '衣服',
          value: 2002
        }
        ],
        // 第二列数据结构
        data2: [{
          text: '苹果',
          value: 104
        },
        {
          text: '香蕉',
          value: 105
        },
        {
          text: '西红柿',
          value: 106
        }
        ],
        data3: [{
          text: '苹果2',
          value: 104
        },
        {
          text: '香蕉3',
          value: 105
        },
        {
          text: '西红柿3',
          value: 106
        }
        ]
      },
      brief4: '',
      show4: false,
      columns4: 3, // 两列
      link: true,
      pickData4: {
        data1: [{
          text: '一年级',
          value: '100'
        }, {
          text: '二年级',
          value: '1000'
        }, {
          text: '三年级',
          value: '10000'
        }],
        data2: {
          '100': [{
            text: '一年级一组',
            value: '110'
          }, {
            text: '一年级2组',
            value: '120'
          }],
          '1000': [{
            text: '二年级一组',
            value: '1100'
          }, {
            text: '二年级2组',
            value: '1200'
          }],
          '10000': [{
            text: '三年级一组',
            value: '11000'
          }, {
            text: '三年级2组',
            value: '12000'
          }]
        },
        data3: {
          '110': [{
            text: '一年级一组fjb',
            value: '111'
          }, {
            text: '一年级一组lt',
            value: '112'
          }],
          '120': [{
            text: '一年级2组jk',
            value: '121'
          }],
          '1100': [{
            text: '二年级一组fjb',
            value: '1110'
          }],
          '1200': [{
            text: '二年级2组gjb',
            value: '1210'
          }],
          '11000': [{
            text: '3年级1组gjb',
            value: '11111'
          }],
          '12000': [{
            text: '3年级2组gjb',
            value: '122222'
          }]
        }
      }
    }
  },
  methods: {
    close () {
      this.show = false
    },
    confirmFn (val) {
      console.log(val)
      this.show = false
      this.brief = JSON.stringify(val)
      this.defaultData = [val.select1]
    },
    toShow () {
      this.show = true
    },
    // picker 2
    close2 () {
      this.show2 = false
    },
    confirmFn2 (val) {
      console.log(val)
      this.show2 = false
      this.brief2 = JSON.stringify(val)
      this.defaultData2 = [val.select1, val.select2]
    },
    toShow2 () {
      this.show2 = true
    },
    // picker 3
    close3 () {
      this.show3 = false
    },
    confirmFn3 (val) {
      console.log(val)
      this.show3 = false
      this.brief3 = JSON.stringify(val)
      this.defaultData3 = [val.select1, val.select2]
    },
    toShow3 () {
      this.show3 = true
    },
    // picker 4
    close4 () {
      this.show4 = false
    },
    confirmFn4 (val) {
      console.log(val)
      this.show4 = false
      this.brief4 = JSON.stringify(val)
      this.pickData4.default = [val.select1, val.select2, val.select3]
    },
    toShow4 () {
      this.show4 = true
    }
  }
}
</script>
<style>
</style>

  <template>
  <dk-layout>
     <dk-navigation slot="header">列表</dk-navigation>
     <template  slot="content">
        <dk-list :data="list" @click="onClick">
          <dk-list-column header bottom-line title="name" sub-title="desc" tag='status' ></dk-list-column>
          <dk-list-column  label="地址：" :clamp="2" bold align="label" prop="address" :column="1"></dk-list-column>
          <dk-list-column label="电话："  prop="mobile"></dk-list-column>
          <dk-list-column label="年龄：" prop="age"></dk-list-column>
          <dk-list-column label="年龄：" prop="age"></dk-list-column>
          <dk-list-column label="年龄：" :column="2" prop="age"></dk-list-column>
          <dk-list-column label="图片：" :column="2" prop="images"></dk-list-column>
          <dk-list-column label="年龄：" :column="2" prop="age"></dk-list-column>
          <dk-list-column label="年龄：" prop="age"></dk-list-column>
        </dk-list>
     </template>
  </dk-layout>
</template>

<script>
export default {
  data () {
    return {
      // tagConfig: {

      // },
      list: [
        {
          name: '李腾',
          desc: '一位伟人',
          address: '云南省普洱市景谷傣族彝族自治县工农路嘉美国际风尚中心3号楼5单元2803',
          mobile: '15810660233',
          images: ['', ''],
          age: '28',
          status: '申请中'
        },
        {
          name: '绗哥',
          desc: '一位伟大的人',
          address: '云南省普洱市景谷傣族彝2803',
          mobile: '15123131232',
          age: '24',
          status: '已完成'
        },
        {
          name: '田野',
          desc: '一位很伟大的人',
          address: '--',
          mobile: '15123131235',
          age: '27',
          status: '待审核'
        }
      ]
    }
  },
  methods: {
    onClick (item) {
      console.log(item.address)
    }
  }
}
</script>

<style lang="less" scoped>

</style>

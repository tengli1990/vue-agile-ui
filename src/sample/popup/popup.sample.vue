<template>
  <dk-layout class='sample-button'>
    <dk-navigation
      slot="header"
      title="弹出层"
    ></dk-navigation>
    <template slot='content'>
      <dk-button-group class="mt20">
      <dk-button class="primary lg" @click="open('0')" text="bounce popup" />
    </dk-button-group>

    <dk-popup v-model="show['0']" radius=".2rem">
      <div class="popup-middle">
        <h3>大家好，这是一个popup弹出层</h3>
        <div class="middle-content">
            <p>从前有个大灰狼，从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼</p>
            <p>从前有个大灰狼，从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼</p>
            <p>从前有个大灰狼，从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼</p>
             <p>从前有个大灰狼，从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼</p>
              <p>从前有个大灰狼，从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼从前有个大灰狼</p>
        </div>
      </div>
    </dk-popup>

    <dk-button-group class="mt20">
      <dk-button class="primary lg" @click="open('1')" text=" popup left" />
    </dk-button-group>
    <dk-popup v-model="show['1']" position='left'>
      <div class="popup-left">大家好，这是一个popup弹出层</div>
    </dk-popup>

    <dk-button-group class="mt20">
      <dk-button class="primary lg" @click="open('2')" text=" popup bottom" />
    </dk-button-group>
    <dk-popup v-model="show['2']" position='bottom'>
      <div class="popup-bottom">大家好，这是一个popup弹出层</div>
    </dk-popup>

    <dk-button-group class="mt20">
      <dk-button class="primary lg" @click="open('3')" text=" popup top" />
    </dk-button-group>
    <dk-popup v-model="show['3']" position='top'>
      <div class="popup-top">大家好，这是一个popup弹出层</div>
    </dk-popup>

    <dk-button-group class="mt20">
      <dk-button class="primary lg" @click="open('4')" text=" popup right" />
    </dk-button-group>
    <dk-popup v-model="show['4']" position='right'>
      <div class="popup-right">大家好，这是一个popup弹出层</div>
    </dk-popup>
    </template>
  </dk-layout>
</template>
<script>
export default {
  data () {
    return {
      show: {
        '0': false,
        '1': false,
        '2': false,
        '3': false,
        '4': false
      }
    }
  },
  methods: {
    open (idx) {
      this.show[idx] = true
    }
  }
}

</script>

<style lang="less" scoped>

.popup-middle{
  width:600px;
  max-width:600px;
  height:500px;
  padding:30px;
  background: #fff;
  font-size:32px;
  h3{
    text-align:center;
  }
  .middle-content{
    padding-top: 20px;
    color:#666;
    line-height:1.5;

  }
}

.popup-left,.popup-right{
  width:600px;
  height:500px;
  background: #fff;
  border-radius:10px;
  overflow: hidden;
}

</style>

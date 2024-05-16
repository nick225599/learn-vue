<template>
  <div id="app">
    <div class="top">
      <BannerVue/>
      <hr/>
    </div>
    <div class="main">
      <div class="left" width="200px">
        <router-link to="/home">Home</router-link>
        <br/>
        <router-link to="/about">About</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
    <div class="bottom">
      <hr/>
      版权所有©上海万序健康科技有限公司丨万序健康 沪ICP备08105451号-7
    </div>
  </div>
</template>

<script>
import BannerVue from './components/Banner.vue'

export default {
  name: 'App',
  components: {
    BannerVue
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

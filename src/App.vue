<template>
  <div id="app">
    <el-container>
      <el-header>
        <BannerVue/>
      </el-header>
      <el-container>
      <el-aside width="200px">
        <router-link to="/home">Home</router-link>
        <br/>
        <router-link to="/about">About</router-link>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
      </el-container>
      <el-footer>        Fouter      </el-footer>
    </el-container>
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

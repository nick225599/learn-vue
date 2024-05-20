<template>
  <div id="app">

    <el-container>
      <el-header>  <BannerVue/></el-header>
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
      <el-footer>      版权所有©上海万序健康科技有限公司丨万序健康 沪ICP备08105451号-7</el-footer>
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

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

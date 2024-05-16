<template>
  <div>
    <h4>About</h4>
    <div class="main">
      <div class="left" width="200px">
        <router-link to="/about/aboutCompany">公司简介</router-link>
        <br/>
        <router-link to="/about/aboutTeam">管理层简介</router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutVue',
  mounted() {
    console.log("about this: ", this)
  }
}
</script>

<style scoped>

</style>

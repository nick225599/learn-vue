<template>
  <div id="app">
    <div class="nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>

<template>
  <div>
    <button @click="clickButtonA()">ButtonA</button>
  </div>
</template>

<script>

export default {
  name: 'CommonB',
  methods: {
    clickButtonA() {
      console.log('clickButtonA')
    }
  }
}
</script>

<style>

</style>

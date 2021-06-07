<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <amingSvgButton @click="handle" :size="'large'">Confirm</amingSvgButton>
    <amingSvgButton @click="handle">确定</amingSvgButton>
    <amingSvgButton @click="handle" :size="'small'"></amingSvgButton>
  </div>
</template>

<script>
import amingSvgButton from './components/aming-svg-button/aming-svg-button.vue'

export default {
  name: 'App',
  components: {
    amingSvgButton
  },
  methods: {
    handle(){
      console.log(2)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <search-panel />
  </div>
</template>

<script>
import searchPanel from './components/search-panel'

export default {
  name: 'App',
  components: {
    'search-panel': searchPanel,
  }
}
</script>

<style>
html{
  height: 100%;
}
body {
  height: 100%;
  background: url('./assets/background.png') no-repeat;
}
#app{
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  width: 600px;
  position: absolute;
  left: 50%;
  top: 35%;
  margin-left: -300px;
  margin-top: -100px;
  text-align: center;
}
</style>

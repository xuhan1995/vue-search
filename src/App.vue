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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

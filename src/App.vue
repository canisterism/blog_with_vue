<template>
  <div id="app">
    <blogheader></blogheader>
    <router-view/>
    <blogfooter></blogfooter>
  </div>
</template>

<script>
import blogheader from './components/blogheader'
import blogfooter from './components/blogfooter'
import index from './components/Index'
export default {
  name: 'App',
  components: {
    blogheader,
    index,
    blogfooter
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

a, a:link, a:visited {
  text-decoration: none;
  color: #2c3e50;
}

</style>

<template>
  <div id="app">
    <AppNavbar />
    <el-container sdtyle="min-height: calc(100vh - 120px);">
      <el-main>
        <router-view /> 
      </el-main>
    </el-container>
    <AppFooter /> 
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppNavbar from './components/AppNavbar.vue'; 


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppFooter
  }
  
  }

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-main {
  padding: 20px;
}
</style>

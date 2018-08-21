<template>
  <el-container class="bian">
    <el-aside width="250px"><Nav /></el-aside>
    <el-container class="right">
      <el-header height="52px"><leftNav /></el-header>
      <el-main><Main/></el-main>
    </el-container>
  </el-container>
</template>


<script>
import Nav from '../Nav/Nav'
import leftNav from '../Nav/leftNav'
import Main from './Main'
export default {
  name: 'Index',
  components:{
    Nav,
    leftNav,
    Main
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right{
  height: 100vh; 
  background: #F7F7F9;
}
</style>

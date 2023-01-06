<template>
  <div id="app">
    
    <!-- <navi></navi> -->
    <el-container>
      <el-header><navi></navi></el-header>
    <!-- <el-aside width="200px">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-menu-item :key="index" v-for="(item,index) in navigator" @click="select(item.path)">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.meta.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-aside> -->
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
  </div>
</template>

<script>
import Navi from './components/Navi.vue'
export default {
  components: { Navi },
  data(){
    return {
      navigator: this.$router.options.routes,
      isCollapse: true
    }
  },
  methods:{
    select(route){
      this.$router.push(route)
    },
    handleOpen(key, keyPath) {
      this.isCollapse = true;
      },
    handleClose(key, keyPath) {
      this.isCollapse = fslse;
    }
  },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
	height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
}
* {
	margin: 0;
	padding: 0;
}

.el-container{
  width: 100%;
	height: 100%;
}
.el-tabs__content{
  height: 100%;
}
</style>

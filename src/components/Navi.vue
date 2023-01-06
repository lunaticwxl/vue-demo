<template>
  <div class="navi">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-submenu :index="key.toString()" :key="key" v-for="(route,key) in router.children">
        <template slot="title">{{route.name}}</template>
        <el-menu-item 
        :index="sub_key.toString()" 
        :key="sub_key" v-for="(iframe,sub_key) in route.meta.iframe_infos" 
        @click="click(route.path,iframe)">
          {{iframe.name}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
<!-- 
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="breadCrumb in breadCrumbList" :key="breadCrumb.key">{{breadCrumb.name}}</el-breadcrumb-item>
    </el-breadcrumb> -->

  </div>
</template>

<script>
export default {
  name: 'Navi',
  mounted(){
    // console.log(JSON.stringify(this.$router.options.routes))
    // let item = this.$router.options.routes.filter(item=> item.name == 'webView')
    // console.log(item)
  },
  computed:{
    breadCrumbList(){
      console.log(this.$route.matched)
      return this.$route.matched;
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      router:this.$router.options.routes.filter(item=> item.name == 'webView')[0]
    }
  },
  methods:{
    click(route,sub_route){
      console.log('=====>'+route)

      this.$bus.emit('menuClicked',sub_route);
      // this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  text-align:center;
  padding: 20px;
}
.home > .el-card {
     width: 300px;
     height: 300px;
     margin: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1.5em;
}
</style>

<template>

<div class="home">
      <div class="con">
        <el-card shadow="hover" v-for="item in navigator" @click.native ="select(item.path)">
          {{item.meta}}
        </el-card>
        <el-card shadow="hover" class="add" @click.native ="add()">
          <i class="el-icon-plus"></i>
        </el-card>
      </div> 
</div>
  
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      navigator: this.$router.options.routes.filter(item => item.path != '/')
    }
  },
  computed:{
    show(){
      this.$router.options.routes.forEach(i=> console.log(i.path))
    }
  },
   components: {
  },
  methods:{
    select(route){
      this.$router.replace(route)
      console.log(this.$router)
    },
    add(){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 20px;
}
.home .con {
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: nowrap;
  justify-content: center;
  text-align:center;
}
.home .con > .el-card {
     width: 300px;
     height: 300px;
     margin: 5px;
     display: flex;
     justify-content: center;
     align-items: center;
     font-size: 1.5em;
}
</style>

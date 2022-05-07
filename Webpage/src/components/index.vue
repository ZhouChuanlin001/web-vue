<template>
    <el-container class="box" :style="{width:width }">
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <el-header style="height: 60px">
        <indexNav></indexNav>
      </el-header>
      <el-main style="padding: 0 0">
        <router-view/>
      </el-main>
      <el-footer>
        <indexFooter :style="{width:width }"></indexFooter>
      </el-footer>
    </el-container>
</template>

<script>
  import indexNav from "./part/indexNav";
  import indexFooter from "./part/indexFooter";
    export default {
      name: "index",
      components: {indexNav, indexFooter},
      data(){
        return{
          width:'320px'
        }
      },
      mounted() {
        if (this._isMobile()) {
          this.width = '100%'
        } else {
          this.width = '320px'
        }
      },
      methods:{
        _isMobile () {
          let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
          return flag;
        }
      }
    }
</script>

<style scoped>

  .el-header{
    padding: 0;
    height: 50px;
  }
  .el-main{
    padding: 0 0;
    overflow: visible;
  }
  .el-footer {
    height: 175px;
    padding: 0 0;
    overflow: visible;
  }
  .box{
    margin:0  auto
  }
</style>

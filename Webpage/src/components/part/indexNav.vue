<template>
   <div style="width: 100%;color: white; line-height: 50px;background-color: rgb(5, 5, 5); height: 50px; position: relative">
      <div class="logo" style="display: flex;">
        <span style="letter-spacing: 2px;margin-left: 40px;font-size: 30px;font-weight: bold;font-family: Cursive;font-style: oblique">宝德鑫</span>
        <span style="margin-top: 5px;font-size: 14px;font-family: Cursive;font-style: oblique">石英石板材</span>
      </div>
     <div class="btn" style="font-size: 20px;line-height: 50px;text-align: center;float: right">
       <div v-show="!show" @click="check1" style="width: 100%;height: 100%;color: white">
        X
       </div>
       <div v-show="show" @click="check2" style="width: 100%;height: 100%;color: white">
        三
       </div>
     </div>
     <div v-show="!show" style="width: 100%;height: 60px;position: absolute;top: 50px;background-color: rgb(29,29,29);z-index: 100" >
        <div style="width: 100%;height: 30px;box-sizing: border-box;color: white;border-top: 1px solid rgb(95,91,91);border-bottom: 1px solid rgb(92,89,89);padding-left: 20px;font-size: 16px;line-height: 30px" @click="handleSelect('2')">
          首页
        </div>
       <div style="width: 100%;height:30px;box-sizing: border-box;color: white;padding-left: 20px;font-size: 16px;line-height: 30px" @click="handleSelect('3')">
          产品中心
       </div>
     </div>
   </div>
<!--   <el-menu-->
<!--     :default-active="activeIndex2"-->
<!--     class="el-menu-demo"-->
<!--     mode="horizontal"-->
<!--     @select="handleSelect"-->
<!--     background-color="#545c64"-->
<!--     text-color="#fff"-->
<!--     active-text-color="#ffd04b">-->
<!--     <div></div>-->
<!--     <el-menu-item index="2"><a >首页</a></el-menu-item>-->
<!--     <el-menu-item index="3"><a target="_blank">产品中心</a></el-menu-item>-->
<!--   </el-menu>-->
</template>

<script>
  export default {
    name: "indexNav",
    data() {
      return {
        activeIndex: '2',
        activeIndex2: '2',
        show:true
      }
    },
    methods:{
      check1(){
        this.show = !this.show
      },
      check2(){
        this.show = !this.show
      },
      handleSelect(key, keyPath) {
        if (key === '2'){
          this.$router.push({name:'homePage'})

        }else if(key === '3'){
          this.$router.push({name:'productView'})
        }
        this.show =true
      },
    }
  };
</script>

<style scoped>
.logo{
  width: 260px;
  height: 100%;
  float: left;


}
  .btn{
    float: left;
    width: 60px;
    height: 100%;
  }
</style>

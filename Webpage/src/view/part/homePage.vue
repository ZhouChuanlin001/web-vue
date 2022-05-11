<template>
  <div>
    <div>
      <!--第一个轮播-->
      <el-carousel style="height: 506px"	>
        <el-carousel-item v-for="item in 3" :key="item" style="height: 506px">
          <a @click="path"><img style="height: 506px;width: 100%" :src="require(`../../assets/img/img2/${urlList1[item-1]}`)" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <a @click="path"><img style="height: 100px;width: 100%" src="../../assets/img/img2/6imj.jpg"></a>
    </div>
    <div>
      <!--第二个轮播-->
      <el-carousel style="height: 780px"	>
        <el-carousel-item v-for="item in 3" :key="item" style="height: 780px">
          <a @click="path"><img style="height: 780px;width: 100%" :src="require(`../../assets/img/img2/${urlList2[item-1]}`)" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <!--第三个轮播-->
      <el-carousel style="height: 300px"	indicator-position="none"	>
        <el-carousel-item v-for="item in 6" :key="item" style="height: 300px">
          <a @click="path"><img style="height: 300px;width: 100%" :src="require(`../../assets/img/img2/${urlList3[item-1]}`)" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <img style="width: 100%;height: 438px" src="../../assets/img/img2/4yar.jpg">
    </div>
    <div>
      <img style="width: 100%;height: 518px" src="../../assets/img/img2/zi7x.jpg">
    </div>
  </div>
</template>

<script>
    export default {
        name: "homePage",
      data(){
          return{
            urlList1:['0.jpg','l2v9.jpg','djg2.jpg'],
            urlList2:['ea3g.jpg','q03m.jpg','zmee.jpg'],
            urlList3:['amec.jpg','dyby.jpg','g9wz.jpg','hnf3.jpg','i2yl.jpg','pxdv.jpg']
          }
      },
      methods:{
        path(){
          this.$router.push({name:'productView2'})
        }
      }
    }
</script>

<style scoped>

</style>

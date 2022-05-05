<template>
  <div style="width: 100%">
    <div>
      <!--第一个轮播-->
      <el-carousel style="height: 492px">
        <el-carousel-item v-for="item in 3" :key="item" style="height: 492px">
          <a @click="path"><img style="height: 492px;width: 100%" :src="require(`../assets/img/${urlList1[item-1]}`)" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info" style="overflow: hidden">
      <!--info-->
      <div class="info-title" style="margin-top: 5px;">
        <h2 style="font-size: 14px">关于我们</h2>
        <h3 style="font-size: 12px;font-weight: 200">ABOUT US</h3>
      </div>
      <div class="info-desc" style="letter-spacing:2px;word-spacing:16px;line-height:25px;text-indent:26px; margin-left:-58px;width:140%;font-size:12px;font-weight: 100;display: inline-block;
	transform: scale(0.7);
	-webkit-transform: scale(0.7);">
        四川华尔固石材有限公司是一家专业从事石英石技术研发、生产制造、加工与销售的现代化企业，公司占地15000平方米，引进优良传统的石英石生产线，公司注重技术、设备、材料与国际接轨，年产量高达100万平方米的优质石材。
      </div>
    </div>
    <div>
      <!--第二个轮播-->
      <el-carousel height="224px">
        <el-carousel-item v-for="item in 3" :key="item">
          <a @click="path"><img style="height: 224px;width: 100%" :src="require(`../assets/img/${urlList2[item-1]}`)" alt=""></a>
        </el-carousel-item>
      </el-carousel>
    </div>
<!--    <div  style="color:white; background-color: black; text-align: center;height: 90px;">-->
<!--      <div style="width:25%;font-size: 10px;float: left;height: 90px;display: flex;flex-direction: column">-->
<!--        <div>-->
<!--          <img src="" alt="">-->
<!--        </div>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.7);-->
<!--	-webkit-transform: scale(0.7);">防渗耐酸碱</p>-->
<!--        <p style="margin-left:-22px;width: 116px;display: inline-block;-->
<!--	transform: scale(0.4);-->
<!--	-webkit-transform: scale(0.4);">-CORRUPTION-</p>-->
<!--      </div>-->
<!--      <div style="font-size: 10px;width:25%;float: left;height: 90px;display: flex;flex-direction: column">-->
<!--        <div>-->
<!--          <img src="" alt="">-->
<!--        </div>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.7);-->
<!--	-webkit-transform: scale(0.7);">坚硬耐磨刮</p>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.4);-->
<!--	-webkit-transform: scale(0.4);">-DURABLE-</p>-->
<!--      </div>-->
<!--      <div style="font-size: 10px;float: left;width:25%;height: 90px;display: flex;flex-direction: column">-->
<!--        <div>-->
<!--          <img src="" alt="">-->
<!--        </div>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.7);-->
<!--	-webkit-transform: scale(0.7);">防火耐高温</p>-->
<!--        <p style="margin-left:-22px;width: 116px;display: inline-block;-->
<!--	transform: scale(0.4);-->
<!--	-webkit-transform: scale(0.4);">-FIRE PREVENTION-</p>-->
<!--      </div>-->
<!--      <div style="font-size: 10px;width:25%;float: left;height: 90px;display: flex;flex-direction: column">-->
<!--        <div>-->
<!--          <img src="" alt="">-->
<!--        </div>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.7);-->
<!--	-webkit-transform: scale(0.7);">环保零甲醛</p>-->
<!--        <p style="display: inline-block;-->
<!--	transform: scale(0.4);-->
<!--	-webkit-transform: scale(0.4);">-HEALTHY-</p>-->
<!--      </div>-->
<!--    </div>-->
    <div class="tp">

    </div>
    <div class="back" style="">
      <div class="back-item" style="margin-right: 1px">
        <h2>传递品质时尚</h2>
        <h5 style="width:201px;margin-left:-40px;display: inline-block;
	transform: scale(0.5);">DELIVER QUALITY AND FASHION</h5>
      </div>
      <div class="back-item" style="margin-left: 1px">
        <h2>不张扬自不凡</h2>
        <h5 style="width:201px;margin-left:-40px;display: inline-block;
	transform: scale(0.5);">DON'T PUBLICIZE YOURSELF</h5>
      </div>
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;">
      <div style="overflow: hidden">
        <div class="img01" style="width: 120px;height: 110px;margin-right: 1px">

        </div>
      </div>
      <div style="overflow: hidden">
        <div class="img02" style="width: 120px;height: 110px;margin-left: 1px">

        </div>
      </div>

    </div>
    <div class="news" style="padding-top: 10px">
      <div class="news-title" style="text-align: center">
        <h4>NEWS</h4>
      </div>
      <div class="news-info">
        <div class="news-info-item">
          <div class="img3-1" style="height: 85px;width: 100%">
          </div>
          <div style="transform: scale(0.6);text-align: center;margin-top: -10px">
            <p style="width: 72px">人性化的设计</p>
            <p>安全性</p>
            <p>健康性</p>
            <p>耐磨性</p>
          </div>
        </div>
        <div class="news-info-item">
          <div class="img3-2" style="height: 85px;width: 100%">
          </div>
          <div style="transform: scale(0.6);text-align: center;margin-top: -10px">
            <p style="width: 84px;margin-left: -8px">良好的防火性能</p>
            <p>抗菌性</p>
            <p>易洁性</p>
            <p>舒适性</p>
          </div>
        </div>
        <div  class="news-info-item">
          <div class="img3-3" style="height: 85px;width: 100%">
          </div>
          <div style="transform: scale(0.6);text-align: center;margin-top: -10px">
            <p style="width: 72px">重要的保障</p>
            <p>无气孔</p>
            <p>不吸水</p>
            <p>抗污性</p>
          </div>
        </div>
      </div>
      <div class="news-footer">
        百搭的各种设计风格营造时尚大气的空间感，将生活的精致与质感一览无遗地展现出来。
      </div>
    </div>
    <div class="vision">
      <!--1-->
      <div class="vision-item" style="margin-top: 25px">
        <div class="vision-item-title">
          <span>
            >
          </span>
          <span>
            眼界广
          </span>
        </div>
        <div class="vision-item-desc">高档装修，大势所趋</div>
      </div>
      <!--2-->
      <div class="vision-item">
        <div class="vision-item-title">
          <span>
            >
          </span>
          <span>
            心境纯
          </span>
        </div>
        <div class="vision-item-desc">大自然的巧匠之作</div>
      </div>
      <!--3-->
      <div class="vision-item">
        <div class="vision-item-title">
          <span>
            >
          </span>
          <span>
            不限边界
          </span>
        </div>
        <div class="vision-item-desc">大规格，更大作为</div>
      </div>
    </div>
    <!--高颜值。。-->
    <div class="height">
      <div style="font-size:14px;line-height:25px;background-color: white;color: black;width: 140px;text-align: center">
        高颜值 舒适 多功能
      </div>
      <div style="width: 240px;font-size: 15px;line-height:30px;color:rgb(238,238,238);margin-top: 10px;border-bottom: 1px solid">
        打造硬核的厨房空间，优享幸福生活
      </div>
      <div style="margin-left: -30px;transform: scale(0.8);font-size: 10px;margin-top: 5px;color: rgb(238,238,238)">
        山河锦绣固然精彩，怎敌一餐一饭来的真实贴心
      </div>
    </div>
    <!--时尚之色-->
    <div class="fashion" style="padding: 20px">
      <div class="fashion-title" style="margin-top: 5px;border-bottom:black 1px solid">
        <h5 style="padding-bottom: 6px">时尚之色</h5>
      </div>
      <div class="fashion-item" style="float: left">
        <div class="fashion-item-img">

        </div>
        <div class="fashion-x">

        </div>
        <div class="fashion-p">
          <p>在嘈杂的世界里</p>
          <p>我们期望有一隅的安静</p>
          <p>可以让人卸下疲惫的伪装</p>
          <p>让心在静谧里回归自然......</p>
        </div>
      </div>
      <div class="fashion-item" style="margin-top: 150px;text-align: right">
        <div class="fashion-item-img1" style="height: 130px;float: right">

        </div>
        <div class="fashion-p" style="width:200px;float: right;padding-right: 4px;border-right: 2px solid black">
          <p>不仅要有人间烟火气的温馨浪漫</p>
          <p>更要有优雅精致的颜值外表</p>
        </div>
      </div>
      <div class="fashion-item" style="float: left">
        <div class="fashion-item-img2" style="width: 175px;height: 110px">

        </div>
        <div class="fashion-x">

        </div>
        <div class="fashion-p">
          <p>经历过风霜的洗礼，勾勒出别具一格</p>
          <p>的自然纹理，庄重中蕴藏着灵动。</p>
        </div>
      </div>
      <div class="fashion-item" style="float:right;text-align: right">
        <div class="fashion-item-img3" style="width: 165px;height: 130px;float: right">

        </div>
        <div class="fashion-p" style="width:200px;float: right;padding-right: 4px;border-right: 2px solid black">
          <p>设计灵感来源于冒险岛黄金海岸</p>
          <p>让生活浪漫而熠熠生辉</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "homePage",
      data () {
          return {
            urlList1:['9ggf.jpg','pf5n.jpg', '9lfc.jpg'],
            urlList2:['7zvk.jpg', 'ty51.jpg', '7hdd.jpg'],
            width:'100%'
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
        path(){
          this.$router.push({path:'productView'})
        },
        _isMobile () {
          let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
          return flag;
        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .info{
    height: 185px;
    background-color: black;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  .back{
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    height: 110px;
    color: white;
    background-image: url("../assets/img/134-41.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat
  }
  .back:after{
    content: '';
    width: 100%;
    height: 110px;
    position: absolute;
    z-index: 1;
    background-color: rgba(0,0,0,0.5);
  }
  .el-header{
    padding: 0;
  }
  .  .el-main{
    padding: 0;
  }
  .back-item{
    padding-top: 5px;
    box-sizing: border-box;
    font-size: 10px;
    width: 120px;
    height: 40px;
    background-color: white;
    color: black;
    text-align: center;
    position: relative;
    z-index: 12;
  }
  .img01{
    background-image: url("../assets/img/cook.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img02{
    background-image: url("../assets/img/cook02.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img02:hover{
    transform: scale(1.2);
    transition: linear 0.5s;
  }
  .img01:hover{
    transform: scale(1.2);
    transition: linear 0.5s;
  }
  .news-info{
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding-top: 10px;
  }
  .news-info-item{
    color: rgb(238,238,238);
    background-color: rgb(125,125,125);
    width: 70px;
    height: 130px;
    margin-left: 3px;
    margin-right: 3px;
    font-size: 10px;
  }
  .img3-1{
    background-image: url("../assets/img/3-2.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img3-2{
    background-image: url("../assets/img/3-3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img3-3{
    background-image: url("../assets/img/3-4.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .news-footer{
    width: 246px;
    margin: 0 auto;
    font-size: 10px;
    font-weight: 500;
    padding: 14px 0;
    border-bottom: black 1.5px solid;
  }
  .vision{
    position: relative;
    margin-top: 10px;
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    color: rgb(238,238,238);
    background-image: url("../assets/img/3ee16c348808f94402098a3fc5136154.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .vision:after{
    content: '';
    width: 100%;
    height: 180px;
    position: absolute;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .vision-item{
    position: relative;
    z-index: 100;
    margin: 5px 20px;
  }
  .vision-item-desc{
    font-size: 10px;
    margin-left: -30px;
    transform: scale(0.7);
  }
  .height{
    padding: 20px;
    height: 355px;
    color: rgb(238,238,238);
    background-image: url("../assets/img/002.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fashion{
    border-left:black 1px solid ;
    border-image: -webkit-linear-gradient(black, white,white) 0 20 20;
  }
  .fashion-x{
    width: 70px;
    border-bottom: 2px solid black;
  }
  .fashion-item-img{
    margin: 10px 0;
    width: 155px;
    height: 115px;
    background-image: url("../assets/img/005.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fashion-item-img1{
    margin: 10px 0;
    width: 155px;
    height: 115px;
    background-image: url("../assets/img/003.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fashion-item-img2{
    margin: 10px 0;
    width: 155px;
    height: 115px;
    background-image: url("../assets/img/cook.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fashion-item-img3{
    margin: 10px 0;
    width: 155px;
    height: 115px;
    background-image: url("../assets/img/004.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .fashion-p{
    letter-spacing:1px;
    font-size: 12px;
    margin-top: 5px;
    line-height: 20px;
  }
  .tp{
    width: 100%;
    height: 100px;
    background-image: url("../assets/img/ftp.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

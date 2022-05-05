<template>
  <div class="index-footer" style="height:175px;color: white;margin-top: 20px">
    <div style=" line-height: 30px;font-weight: 300;font-size: 14px;letter-spacing:1px;color:rgb(233,233,233);text-align: center;width: 100%;height: 175px;position: absolute;z-index: 20">
      <div class="ewm" style=";width: 68px;height: 68px;margin:20px auto 10px  auto;">

      </div>
      <div style="">
        扫描二维码快速了解
      </div>
      <div>
        联系销售经理  17709087888
      </div>
      <div style="font-size: 10px;transform: scale(0.6);margin-top: -10px">
        蜀ICP备2022011306号
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexFooter"
    }
</script>

<style scoped>
.index-footer{
  width: 100%;
  position: relative;
  background-image: url("../../assets/img/2b318f3f7cd0947f56db715072aac446.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.index-footer:after{
  content: '';
  width: 100%;
  height: 175px;
  position: absolute;
  z-index: 1;
  background-color: rgba(0,0,0,0.7);
}
  .ewm{
    background-image: url("../../assets/img/20_a932e843945195a02ae10ce66ab13da3.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>

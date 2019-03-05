<template>
  <div class="four_page">
      <div class="regis">
          <img src="../assets/images/b-马上注册.png" alt="">
          <img src="../assets/images/活动规则.png" alt="" class="rule">
      </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {}
  }
}

</script>

<style scoped lang='scss'>
 @import "../assets/func.scss";
  .four_page {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 204%;
    background: url('../assets/images/首页移动_04.jpg') no-repeat top center;
    background-size: cover;
    .regis{
        width: 100%;
        position: absolute;
        top:Rem(500);
        padding-left:Rem(122);
        box-sizing: border-box;
        // display: flex;
        // justify-content:space-around;

        img{
            width: Rem(180);
        }
        .rule{
            margin-left:Rem(64);
        }

    }

  }

</style>

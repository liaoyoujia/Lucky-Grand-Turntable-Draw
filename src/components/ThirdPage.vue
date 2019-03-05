<template>
  <div class="third_page">
    <div class="top">
      <div class="gril_god">
        <img src="../assets/images/b-守护女神小.png" alt="">
      </div>
      <div class="boy_god">
        <img src="../assets/images/b-进阶男神小.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <div class="left_rule">
        <img src="../assets/images/b-马上下订拷贝.png" alt="">
        <img src="../assets/images/活动规则.png" alt="" class="prize_activity">
      </div>

      <div class="right_prize">
        <img src="../assets/images/点击抽牌.png" alt="" class="prize_click" @click="handPrize">
        <img src="../assets/images/扑克牌转盘.png" alt="" :class="[isRotate ?'rotate': '', 'prize_brand']">
        <img src="../assets/images/纸牌背面.png" alt="" class="prize_behind">
      </div>

    </div>
    <div class="activity">
      <img src="../assets/images/礼品-女.png" alt="">
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      isRotate: false
    }
  },
  methods: {
    handPrize () {
      this.isRotate = !this.isRotate
    }
  }
}

</script>

<style scoped lang='scss'>
  @import "../assets/func.scss";

  @keyframes changDeg {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(489deg);
    }
  }

  .rotate {
    animation: changDeg 2s linear 0.2s;
    animation-fill-mode: forwards;

  }

  .third_page {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 237.3%;
    background: url('../assets/images/首页移动_03.jpg') no-repeat top center;
    background-size: cover;
    position: relative;

    img {
      display: block;
    }

    .top {
      display: flex;
      position: absolute;
      top: Rem(240);
      left: Rem(60);

      .gril_god {
        margin-right: Rem(34);

        img {
          width: Rem(310);
        }
      }

      .boy_god {
        padding-top: Rem(18);

        img {
          width: Rem(246);
        }
      }
    }

    .bottom {
      display: flex;
      width: 100%;
      justify-content: center;
      position: absolute;
      top: Rem(400);

      .left_rule {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: Rem(32);

        img {
          width: Rem(174);

        }

        .prize_activity {
          margin-top: Rem(80);
        }
      }

      .right_prize {
        position: relative;

        .prize_brand {
          width: Rem(442);
        }

        .prize_click {
          position: absolute;
          top: Rem(-44);
          left: Rem(144);
          width: Rem(184);
        }

        .prize_behind {
          width: Rem(304);
          position: absolute;
          top: Rem(68);
          left: Rem(68);
        }
      }
    }

    .activity {
      position: absolute;
      top: Rem(1036);

      width: 100%;

      img {
        width: Rem(720);
        margin: 0 auto;
      }
    }

  }

</style>

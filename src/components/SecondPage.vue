<template>
  <div class="second_page">
    <div class="rotate_box">
      <div class="rotate_prize">
        <img src="../assets/images/转盘.png" alt="" :class="[isRotate ?'rotate': '', 'prize_img']" ref="img">
        <img src="../assets/images/箭头.png" alt="" @click="handPrize" class="prize_go">
      </div>
      <div class="rotate_symbol">
        <img src="../assets/images/马上试驾.png" alt="">
        <img src="../assets/images/活动规则.png" alt="">
        <img src="../assets/images/中奖名单.png" alt="">
      </div>
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
    handPrize (evevt) {
      // if(this.isRotate&&)
      if(this.$refs.img.className.indexOf('rotate')>-1){
        this.$refs.img.className='prize_img'          
      };
      console.log(this.$refs.img.className,1231);
      
      
    //   console.log(event, 3213)

      this.isRotate = !this.isRotate
    }
  }
}

</script>

<style scoped lang='scss'>
  @import "../assets/func.scss";

//   @keyframes changDeg {
//     0% {
//       transform: rotate(0deg);
//     }

//     100% {
//       transform: rotate(489deg);
//     }
//   }

  .rotate {
    // animation: changDeg 2s linear 0.2s;
    transform: rotate(120deg);
    transition:all 1s ease-in-out;
    // animation-fill-mode: forwards;

  }

  .second_page {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 0;
    padding-bottom: 230%;
    background: url('../assets/images/首页移动_02.jpg') no-repeat top center;
    background-size: cover;

    .rotate_box {
      position: absolute;
      top: Rem(352);
      display: flex;

      img {
        display: block;
      }

      .rotate_prize {

        .prize_img {
          width: Rem(504);

        }

        .prize_go {
          width: Rem(112);
          position: absolute;
          ;
          top: Rem(144);
          left: Rem(200);

        }

      }

      .rotate_symbol {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: Rem(100) 0;

        img {
          width: Rem(174)
        }
      }
    }
  }

</style>

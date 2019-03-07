<template>
  <div class="third_page">
    <div class="top">
      <div class="gril_god">
        <img src="../assets/images/b-守护女神小.png" alt="" v-show="!isGirl" class="small_girl" @click="changeImg(1)">
        <img src="../assets/images/b-守护女神.png" alt="" v-show="isGirl" class="big_girl">
      </div>
      <div class="boy_god">
        <img src="../assets/images/b-进阶男神小.png" alt="" v-show="isGirl" @click="changeImg(2)" class="small_boy">
        <img src="../assets/images/b-进阶男神.png" alt="" v-show="!isGirl" class="big_boy">
      </div>
    </div>
    <div class="bottom">
      <div  :class="[isGirl?'left_rule':'left']">
        <img src="../assets/images/b-马上下订拷贝.png" alt="">
        <img src="../assets/images/活动规则.png" alt="" class="prize_activity" @click="handleActivity">
      </div>

      <div class="right_prize" v-show="isGirl">
        <img src="../assets/images/点击抽牌.png" alt="" class="prize_click" @click="luckflag ? pointer():''">
        <img src="../assets/images/扑克牌转盘.png" alt="" class="prize_brand" :style="{transform:rotateAngle,transition:rotateTransition == ''?'transform 4s ease-in-out':rotateTransition }">
        <img src="../assets/images/纸牌背面.png" alt="" class="prize_behind">
        <img :src="imgSrc" alt="" class="prize_puke" v-show="imgSrc==''?false:true">
      </div>
      <div class="god_box">
        <img src="../assets/images/进阶男神页面.png" alt="" v-show="!isGirl" class="process_god">
      </div>

    </div>
    <div class="activity" v-show="isGirl">
      <img src="../assets/images/礼品-女.png" alt="">
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import img from '../assets/images/model/rule_2.png'
import unload from '../assets/images/model/unlogin.png'
import untime from '../assets/images/model/弹窗-扑克牌显示PC2.png'
import cardOne from '../assets/images/model/card_1.png'
import cardTwo from '../assets/images/model/card_2.png'
import cardThree from '../assets/images/model/card_3.png'
import cardFour from '../assets/images/model/card_4.png'
import {getRequest} from '../utils/api.js'
export default {
  data () {
    return {
      imgSrc: '',
      isGirl: true,
      luckflag: true,
      rotateAngle: 0, // 将要旋转的角度
      startRotatingDegree: 0, // 初始旋转角度
      rotateTransition: '', // 控制过渡效果
      click_flag: true, // 是否可以旋转抽奖

    }
  },
  methods: {
    changeImg (value) {
      // value==1&&this.isGirl=false,
      if (value === 1) {
        console.log(1)

        this.isGirl = true
        return
      }
      if (value === 2) {
        console.log(2)

        this.isGirl = false
      }
    },
    pointer () {
      getRequest({'activityid': '5DD9CA55-BC77-4875-8342-EAF2F7036772'}).then((res) => {
        if (res && res.data) {
          let code = res.data.MsgCode
          // 测试
          // res.data && this.getlotteryPrizeFun(8001)
          console.log(code, 31231)

          switch (code) {
            case 1:
              res.data.data && this.getlotteryPrizeFun(parseInt(res.data.data.PrizeId))
              break;
            case 11:
              this.$bus.$emit('addMask', unload);
              break;
            case 13:
              this.$bus.$emit('addMask', untime);
              break;
            case 3:
              this.$bus.$emit('addMask', untime);
          }
        }
      })
    },
    handleActivity () {
      this.$bus.$emit('addMask', img)
    },
    getlotteryPrizeFun (res) {
      switch (res) {
        case 8001:
          this.rotate('奖品1')
          break
        case 8002:
          this.rotate('奖品2')
          break
        case 8003:
          this.rotate('奖品3')
          break
        default:
          this.rotate('无奖')
      }
    },
    rotate (prize) { // 目前是只转动转盘
      if (!this.click_flag) return
      var type = 0 // 默认为 0  转盘转动
      var randCircle = 20 // 附加多转几圈，2-3
      var duringTime = 4 // 默认为 5s
      var rotateAngle = ''
     rotateAngle = randCircle * 360 + 100
      this.click_flag = false // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        var rotateAngle = this.startRotatingDegree + rotateAngle - this.startRotatingDegree % 360 // 将要旋转的角度
        this.startRotatingDegree = rotateAngle // 改变初始旋转的角度
        this.rotateAngle = 'rotate(' + rotateAngle + 'deg)' // 真正控制转动角度
        // 旋转结束后允许再次触发
        setTimeout(() => {
          this.click_flag = true
          this.gameOver(prize)
        }, duringTime * 1000 + 200)
      }
    },
    gameOver (prize) {
      switch (prize) {
        case '无奖':
          this.imgSrc = cardOne
          this.$bus.$emit('addMask', cardFour)
          break
        case '奖品2':
          this.imgSrc = cardTwo
          this.$bus.$emit('addMask', cardTwo)
          break
        case '奖品3':
          this.imgSrc = cardThree
          this.$bus.$emit('addMask', cardThree)
          break
        case '奖品1':
          this.imgSrc = cardOne
          setTimeout(() => { this.$bus.$emit('addMask', cardOne) }, 1000)
          break
      }
    },
    handTap () {
      this.isRotate = !this.isRotate
    }
  }
}

</script>

<style scoped lang='scss'>
  @import "../assets/func.scss";

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

        .big_girl {
          width: Rem(310);
        }

        .small_girl {
          width: Rem(246);
          position: absolute;
          top: Rem(16);
        }
      }

      .boy_god {
        padding-top: Rem(18);

        .small_boy {
          width: Rem(246);
          position: absolute;
          top: Rem(16);
          left: Rem(340);
        }

        .big_boy {
          width: Rem(310);
          position: absolute;
          top: 0;
          left: Rem(290);
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
        position: relative;
        padding-left: Rem(32);

        img {
          width: Rem(174);

        }

        .prize_activity {
          margin-top: Rem(80);
        }
      }
       .left{
        position: absolute;
        top:Rem(110);
        left:Rem(40);
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
        .prize_puke{
          width: Rem(304);
          position: absolute;
           position: absolute;
          top: Rem(68);
          left: Rem(68);
        }

        .prize_click {
          position: absolute;
          top: Rem(-44);
          left: Rem(144);
          width: Rem(184);
          z-index: 10;
        }

        .prize_behind {
          width: Rem(304);
          position: absolute;
          top: Rem(68);
          left: Rem(68);
        }
      }
      .god_box{
        width: Rem(750);

      .process_god {
        display: block;
        width: Rem(720);
        position: absolute;
        top:Rem(40);
        left:Rem(14);
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

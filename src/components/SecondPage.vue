<template>
  <div class="second_page">
    <div class="rotate_box">
      <div class="rotate_prize">
        <img src="../assets/images/转盘.png" alt="" :style="{transform:rotateAngle,transition:rotateTransition == ''?'transform 4s ease-in-out':rotateTransition }"
          class="prize_img" ref="img">
        <img src="../assets/images/箭头.png" alt="" @click="pointer" class="prize_go">
      </div>
      <div class="rotate_symbol">
        <img src="../assets/images/马上试驾.png" alt="" @click=startCar(1)>
        <img src="../assets/images/活动规则.png" alt="">
        <img src="../assets/images/中奖名单.png" alt="" @click=startCar(2)>
      </div>
    </div>
  </div>
</template>

<script type='text/ecmascript-6'>
import imgRule from '../assets/images/model/rule_1.png'
import imgWin from '../assets/images/model/wining_list.png'
import cardOne from '../assets/images/model/card_1.png'
import cardTwo from '../assets/images/model/card_2.png'
import cardThree from '../assets/images/model/card_3.png'
import cardFour from '../assets/images/model/card_4.png'
import unload from '../assets/images/model/unlogin.png'
import untime from '../assets/images/model/弹窗-扑克牌显示PC2.png'
import {
  getRequest
} from '../utils/api.js'

export default {
  data () {
    return {
      rotateAngle: 0, // 将要旋转的角度
      startRotatingDegree: 0, // 初始旋转角度
      rotateTransition: '', // 控制过渡效果
      click_flag: true // 是否可以旋转抽奖
    }
  },
  methods: {
    pointer () {
      getRequest({
        'activityId': 'D89DA715-3682-4068-AB58-54DB243D46C5'
      }).then((res) => {
        if (res && res.data) {
          let code = res.data.MsgCode
          // 测试
          // res.data && this.getlotteryPrizeFun(7001)
          switch (code) {
            case 1:
              res.data.data && this.getlotteryPrizeFun(parseInt(res.data.data.PrizeId))
              break
            case 11:
              this.$bus.$emit('addMask', unload)
              break
            case 13:
              this.$bus.$emit('addMask', untime)
              break
            case 3:
              this.$bus.$emit('addMask', untime)
          }
        }
      })
    },
    getlotteryPrizeFun (res) {
      switch (res) {
        case 7001:
          this.rotate('奖品1')
          break
        case 7002:
          this.rotate('奖品2')
          break
        case 7003:
          this.rotate('奖品3')
          break
        default:
          this.rotate('无奖')
      }
    },
    rotate (prize) { // 目前是只转动转盘
      console.log(prize, 11111)

      if (!this.click_flag) return
      var type = 0 // 默认为 0  转盘转动
      var randCircle = 20 // 附加多转几圈，2-3
      var duringTime = 5 // 默认为 5s
      var rotateAngle = ''
      switch (prize) {
        case '无奖':
          rotateAngle = randCircle * 360 + 100
          break
        case '奖品2':
          rotateAngle = randCircle * 360 + 290
          break
        case '奖品3':
          rotateAngle = randCircle * 360 + 210
          break
        case '奖品1':
          rotateAngle = randCircle * 360 + 30
          break
      }
      this.click_flag = false // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        var rotateAngle = this.startRotatingDegree + rotateAngle - this.startRotatingDegree % 360 // 将要旋转的角度
        this.startRotatingDegree = rotateAngle // 改变初始旋转的角度
        console.log(rotateAngle, 90)

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
          this.$bus.$emit('addMask', cardFour)
          break
        case '奖品2':
          this.$bus.$emit('addMask', cardTwo)
          break
        case '奖品3':
          this.$bus.$emit('addMask', cardThree)
          break
        case '奖品1':
          this.$bus.$emit('addMask', cardOne)
          break
      }
    },
    //   gameOver () {
    //      // 游戏结束,重置旋转初始位置
    //      this.rotateAngle = "rotate(" + 0 + "deg)";//真正控制转动角度的,为0,回到初始位置
    //      this.rotateTransition = 'transform 0.05s ease-in-out' //控制转动过渡效果的
    //      setTimeout(()=>{
    //          this.rotateTransition = ''
    //      },100)
    //      // 中奖弹窗提示
    //     //  this.isShowMask = true
    //     //  this.winAward = true
    //      // 更新抽奖次数
    //     //  this.getActcivityFancy()
    //  },
    startCar (value) {
      value === 1 && this.$bus.$emit('addMask', imgRule)
      value === 2 && this.$bus.$emit('addMask', imgWin)
    },
   
  }
}

</script>

<style scoped lang='scss'>
  @import "../assets/func.scss";

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

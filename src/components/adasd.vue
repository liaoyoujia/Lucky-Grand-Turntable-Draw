<template>
 <div class="turntable">
     <!-- 点击时候转动转盘 指针不转 -->
     <img class="turntable-center" :style="{transform:rotateAngle,transition:rotateTransition == ''?'transform 4s ease-in-out':rotateTransition }" src="../assets/images/扑克牌转盘.png">
     <img class="turntable-top" @click="luckflag ? pointer():''" src="../assets/images/箭头.png" >
 </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data () {
    return {
      luckflag: true,
      rotateAngle: 0, // 将要旋转的角度
      startRotatingDegree: 0, // 初始旋转角度
      rotateTransition: '', // 控制过渡效果
      click_flag: true // 是否可以旋转抽奖
    }
  },
  methods: {
    // 点击指针
    pointer () {
      const me = this
      // 如果没有登录,则前往登录页面
      //   if(me.$store.state.loginUser!='true'){
      //       this.$router.push({path:'/login.html',query:{fancy:'fancy'}})
      //       return
      //   }
      // 抽奖函数
      this.getlotteryPrizeFun()
    },
    // 转动
    rotate (prize) { // 目前是只转动转盘
      if (!this.click_flag) return
      var type = 0 // 默认为 0  转盘转动
      var randCircle = 10 // 附加多转几圈，2-3
      var duringTime = 5 // 默认为 5s
      var rotateAngle = ''
      switch (prize.name) {
        case '奖品1':rotateAngle = randCircle * 360 + 330; break
        case '奖品2':rotateAngle = randCircle * 360 + 270; break
        case '奖品3':rotateAngle = randCircle * 360 + 210; break
        case '奖品4':rotateAngle = randCircle * 360 + 150; break
        case '奖品5':rotateAngle = randCircle * 360 + 90; break
        case '奖品6':rotateAngle = randCircle * 360 + 30; break
      }
      this.click_flag = false // 旋转结束前，不允许再次触发
      if (type == 0) {
        // 转动盘子
        var rotateAngle = this.startRotatingDegree + rotateAngle - this.startRotatingDegree % 360// 将要旋转的角度
        this.startRotatingDegree = rotateAngle// 改变初始旋转的角度
        this.rotateAngle = 'rotate(' + rotateAngle + 'deg)'// 真正控制转动角度
        // 旋转结束后允许再次触发
        setTimeout(() => {
          this.click_flag = true
          this.gameOver(prize)
        }, duringTime * 1000 + 200)
      }
    },
    // 游戏结束
    gameOver () {
      // 游戏结束,重置旋转初始位置
      this.rotateAngle = 'rotate(' + 0 + 'deg)'// 真正控制转动角度的,为0,回到初始位置
      this.rotateTransition = 'transform 0.05s ease-in-out' // 控制转动过渡效果的
      setTimeout(() => {
        this.rotateTransition = ''
      }, 100)
      // 中奖弹窗提示
      this.isShowMask = true
      this.winAward = true
      // 更新抽奖次数
      this.getActcivityFancy()
    },
    // 请求活动页面数据
    getActcivityFancy () {
      const me = this
      //   $.Ajax.post({
      //       url: '/common/activity/getActivityPageInfo.json',
      //       callBack(res){
      //           me.num = res.data.lotteryNum;//剩余抽奖次数
      //       }
      //   })
    },
    // 请求点击抽奖数据,中奖操作
    getlotteryPrizeFun () {
      const me = this
      $.Ajax.post({
        url: '/user/activity/lotteryPrize.json',
        callBack (res) {
          // console.log(res)
          me.winId = res.data.join_id
          me.prize = res.data.prize
          me.prizeArr = me.srcArr.filter(item => {
            console.log()
            if (item.title == me.prize.name) return true
            return false
          })
          me.rotate(res.data.prize)
        },
        fail: false,
        failBack () {
          me.tipMessage = '您的抽奖次数为0,无法参与抽奖'
          me.noChanceAndNotJoin = true
          me.isShowMask = true
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>

</style>

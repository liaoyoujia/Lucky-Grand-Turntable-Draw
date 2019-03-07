<template>
  <div class="diage" @touchmove.prevent v-show="imgSrc">
    <img :src="img" alt="" :class="[img ? 'images' : 'ordin','' ]">
    <div class="icon"><i class="iconfont" @click="hideDisag">&#xe600;</i></div>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  data: () => {
    return {
      imgSrc: ''
    }
  },
  computed: {
    img () {
      return this.imgSrc
    }
  },
  created () {
    this.$bus.$on('addMask', (val) => {
      this.imgSrc = val
    })
  },
  methods: {
    hideDisag () {
      this.imgSrc = ''
    }
  }

}

</script>

<style scoped lang='scss'>
  .diage {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: rgba(46, 64, 74, .8);

    .images {
      display: block;
      width: 70%;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      transition: all 4s ease;

    }

    .icon {
      position: absolute;
      left: 44.2%;
      top: 83%;

      .iconfont {
        font-size: 40px;
        color: #fff;
      }
    }

    .ordin {
      display: block;
      width: 70%;
      position: absolute;
      left: -200px;
      top: -200px;
    }
  }

</style>

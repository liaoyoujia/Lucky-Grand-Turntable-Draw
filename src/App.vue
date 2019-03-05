<template>
  <div id="app">
    <FirstPage></FirstPage>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
    <FourPage></FourPage>
  </div>
</template>

<script>
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourPage from './components/FourPage'
export default {
  name: 'App',
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    FourPage
  }
}

</script>

<style lang="scss">
  @import "./assets/func.scss";

  #app {

    .add {
      height: Rem(100);
      background-color: cyan;
      width: Rem(100)
    }
  }

</style>

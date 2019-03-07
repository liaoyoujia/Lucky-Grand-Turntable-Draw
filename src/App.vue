<template>
  <div id="app">
    <FirstPage></FirstPage>
    <SecondPage></SecondPage>
    <ThirdPage></ThirdPage>
    <FourPage></FourPage>
    <Diage></Diage>
  </div>
</template>

<script>
import FirstPage from './components/FirstPage'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourPage from './components/FourPage'
import Diage from './components/diagger'
import imgRule from './assets/images/model/rule_1.png'
export default {
  name: 'App',
  data: () => {
    return {
      dasd: imgRule
    }
  },
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    FourPage,
    Diage,
  }

}

</script>

<style lang="scss">

  

</style>

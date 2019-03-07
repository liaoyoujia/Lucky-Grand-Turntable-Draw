/* eslint-disable */
window.onresize = setFontSize
setFontSize()

function setFontSize () {

  var designWidth = 750
  var windowWidth = document.documentElement.clientWidth
  if (windowWidth > designWidth) {
    windowWidth = designWidth
  }
  document.documentElement.style.fontSize = 100 * (windowWidth / designWidth) + 'px'

}

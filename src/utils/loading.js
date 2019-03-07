import {Loading} from 'element-ui'

let loading
export const startLoading = () => {
  console.log(31231231)

  loading = Loading.service({
    lock: true,
    text: '正在拼命加载中',
    background: '#888'
  })
}

export const endLoading = () => {
  loading.close()
}

import http from './http'

export const getRequest = (data) => {
  console.log(data, 1323)

  return http({method: 'post', url: '/Umbraco/Surface/Activity/GetPrize', data})
}

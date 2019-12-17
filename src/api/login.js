import request from '@/utils/request'

export function handleLogin (data) {
  return request({
    url: 'loginURL',
    method: 'post',
    data
  })
}

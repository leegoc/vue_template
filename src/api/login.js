import request from '@/utils/request'

export function handleLogin (data) {
  return request({
    url: '/admin/admin_public/login_v1',
    method: 'post',
    data
  })
}

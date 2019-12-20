// 秒数转时分秒
// 传入的参数为秒数
// 返回格式如：01:33:02
export function timeTransform (s) {
  let ss, mm, hh
  ss = Math.floor(s) % 60 < 10
    ? '0' + Math.floor(s) % 60
    : Math.floor(s) % 60
  mm = Math.floor(Math.floor(s) / 60) < 10
    ? '0' + Math.floor(Math.floor(s) / 60)
    : Math.floor(Math.floor(s) / 60)
  hh = Math.floor(Math.floor(s) / (60 * 12)) < 10
    ? '0' + Math.floor(Math.floor(s) / (60 * 12))
    : Math.floor(Math.floor(s) / (60 * 12))
  return hh + ':' + mm + ':' + ss
}

// 获取当前时间，返回格式：2019-09-15 12：00
export function getCurrentTime () {
  const t = new Date()
  const month = t.getMonth() + 1 < 10 ? '0' + (t.getMonth() + 1) : t.getMonth() + 1
  const day = t.getDate() < 10 ? '0' + t.getDate() : t.getDate()
  const h = t.getHours() < 10 ? '0' + t.getHours() : t.getHours()
  const m = t.getMinutes() < 10 ? '0' + t.getMinutes() : t.getMinutes()
  return t.getFullYear() + '-' + month + '-' + day + ' ' + h + ':' + m
}

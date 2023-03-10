// 设置缓存
export function setItem(key, value) {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取缓存
export function getItem(key) {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  }
}
// 清除指定缓存
export function removeItem(key) {
  window.localStorage.removeItem(key)
}
// 清除所有缓存
export function clearItem() {
  window.localStorage.clear()
}

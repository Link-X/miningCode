export const logout = () => {
  // 退出账号
  localStorage.clear()
  window.location.reload()
}

export default {
  isLogin: state => state.isLogin,
  iphone: state => state.iphone || localStorage.getItem('miningIphone')
}

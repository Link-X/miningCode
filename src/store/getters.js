export default {
  isLogin: state => state.isLogin,
  iphone: state => state.iphone || localStorage.getItem('miningIphone'),
  newsNumber: state => state.newsNumber,
  serch: state => state.serch,
  listNumber: state => state.listNumber,
  hashNumber: state => state.hashNumber
}

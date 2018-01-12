import Vue from 'vue'
import Router from 'vue-router'
const MainPage = () => import(/* webpackChunkName: "login" */ '@/views/mainPage')
const FindKey = () => import(/* webpackChunkName: "login" */ '@/views/findKey')
const Home = () => import(/* webpackChunkName: "home" */ '@/views/home')
const Account = () => import(/* webpackChunkName: "home" */ '@/views/account')
const Anomaly = () => import(/* webpackChunkName: "home" */ '@/views/anomaly')
const AnomalyDetals = () => import(/* webpackChunkName: "detals" */ '@/views/anomalyDetals')
const noDef = () => import(/* webpackChunkName: "detals" */ '@/views/404')
const MineDetails = () => import(/* webpackChunkName: "detals" */ '@/views/mineDetails')
const Graph = () => import(/* webpackChunkName: "detals" */ '@/views/graph')
const Setting = () => import(/* webpackChunkName: "detals" */ '@/views/setting')
const MiningList = () => import(/* webpackChunkName: "detals" */ '@/views/miningList')
Vue.use(Router)

export default new Router({
  base: '/',
  routes: [
    {
      path: '/',
      component: MainPage,
      children: [
        { path: '', name: 'home', component: Home },
        { path: '/home', name: 'home', component: Home },
        { path: '/anomaly', name: 'anomaly', component: Anomaly },
        { path: '/account', name: 'account', component: Account },
        { path: '/anomalyDetals', name: 'anomalyDetals', component: AnomalyDetals },
        { path: '/mineDetails', name: 'mineDetails', component: MineDetails },
        { path: '/graph', name: 'graph', component: Graph },
        { path: '/setting', name: 'setting', component: Setting },
        { path: '/miningList', name: 'miningList', component: MiningList }
      ]
    },
    { path: '/FindKey', name: 'FindKey', component: FindKey },
    {
      path: '*', component: noDef
    }
  ]
})

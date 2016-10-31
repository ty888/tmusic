import Vue from 'vue'
import App from './App'

// 引入vue-router
import VueRouter from 'vue-router'

// 引入vue-resource
import VueResource from 'vue-resource'

// 引用mint-ui
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// 使用mint-ui
Vue.use(Mint)

// 使用vue-router
Vue.use(VueRouter)

// 使用vue-resource
Vue.use(VueResource)

Vue.http.options.root = 'http://apis.baidu.com/geekery/music'
// 不以json形式请求
Vue.http.options.emulateJSON = true

// 引入 view 组件
import { Search, Player, Index } from './views'
const router = new VueRouter({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/player/:hash/:singername/:songname',
      name: 'player',
      component: Player
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    { path: '*', redirect: '/index' }
  ]
})
new Vue(Vue.util.extend({ router }, App)).$mount('#app')

import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);

//导入App根组件
import app from './App.vue'
//按需导入mint ui

import { Header , Swipe, SwipeItem} from 'mint-ui'

Vue.component(Swipe.name, Swipe)

Vue.component(SwipeItem.name, SwipeItem)


//导入mui样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);


//导入自己的router.js模块
import router from './router'

var vm = new Vue({
    el: '#app',
    render : c => c(app),
    router
})
import Vue from 'vue'
//导入路由的包
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//导入时间插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dataFormat' ,function(dataStr , pattern = "YYYY-MM-DD HH:MM:SS"){
   return moment(dataStr).format(pattern)
})

//导入 vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://www.liulongbin.top:3005/'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2);

//导入App根组件
import app from './App.vue'
//按需导入mint ui

import { Header , Swipe, SwipeItem , Button } from 'mint-ui'


Vue.component(Button.name, Button)

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
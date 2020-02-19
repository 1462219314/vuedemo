//导入 vue-router 包
import VueRouter from 'vue-router'

import HomeContarner from './component/tabbar/home.vue'
import MemberContarner from './component/tabbar/member.vue'
import SearchContarner from './component/tabbar/search.vue'
import ShopcarContarner from './component/tabbar/shopcar.vue'
//创建路由对象
export default  new VueRouter({
    routes : [
        {   path : '/', redirect : '/home' },
         { path : '/home' , component :  HomeContarner },
         { path : '/member' , component :  MemberContarner },
         { path : '/shopcar' , component :  ShopcarContarner },
         { path : '/search' , component :  SearchContarner }
    ],
    linkActiveClass : 'mui-active' //替换默认选中类
})


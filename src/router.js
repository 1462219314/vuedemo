//导入 vue-router 包
import VueRouter from 'vue-router'

import HomeContarner from './component/tabbar/home.vue'
import MemberContarner from './component/tabbar/member.vue'
import SearchContarner from './component/tabbar/search.vue'
import ShopcarContarner from './component/tabbar/shopcar.vue'
import Newslist from './component/news/newlist.vue'
import NewsInfo from './component/news/newsinfo.vue';
import PhotoList from './component/photos/photolist.vue';
import PhotoInfo from './component/photos/photoinfo.vue';
//创建路由对象
export default  new VueRouter({
    routes : [
        {   path : '/', redirect : '/home' },
         { path : '/home' , component :  HomeContarner },
         { path : '/member' , component :  MemberContarner },
         { path : '/shopcar' , component :  ShopcarContarner },
         { path : '/search' , component :  SearchContarner },
         { path : '/home/newslist' , component :  Newslist },
         { path : '/home/photolist' , component :  PhotoList },
         { path : '/home/newsinfo/:id' , component :  NewsInfo },
         { path : '/home/photoinfo/:id' , component :  PhotoInfo },
         
    ],
    linkActiveClass : 'mui-active' //替换默认选中类
})


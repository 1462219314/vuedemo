import Vue from 'vue'

//导入App根组件
import app from './App.vue'
  
//按需导入mint ui

import { Header } from 'mint-ui';

//导入mui样式
import './lib/mui/css/mui.min.css'

Vue.component(Header.name, Header);

var vm = new Vue({
    el: '#app',
    render : c => c(app)
})
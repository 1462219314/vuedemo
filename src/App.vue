<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="练习项目"></mt-header>

    <!-- 中间的路由 router-viwer区域 -->
    
    <transition>
      <router-view ></router-view>
    </transition>

    <!-- 底部tabbar 区域 -->

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-vuew" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-vuew" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link class="mui-tab-item-vuew" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-vuew" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang='scss'>
.mint-header{
  z-index: 99;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
 
}
.v-leave-to {
    position: absolute;
	opacity: 0;
  transform: translateX(-100%);
 
}
.v-enter-active{
  

   transition: all 0.5s ease;
}
.v-leave-active {
  position: absolute;
  transition: all 0.5s ease;

}
// 该类名，解决 tabbar 点击无法切换的问题
.mui-bar-tab .mui-tab-item-vuew.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-vuew {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-vuew .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-vuew .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
<template>
  <div class="d-app-wrap">
    <div class="daw-one">
      头部
    </div>
    <div class="daw-two">
      <router-view></router-view>
    </div>
    <div class="daw-three">
    <router-link to="/home" class="dawt-1">首页</router-link>
    <router-link to="/member" class="dawt-1">会员</router-link>
    <router-link to="/cart" class="dawt-1">购物车</router-link>
    <router-link to="/search" class="dawt-1">搜索</router-link>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="sass">

</style>


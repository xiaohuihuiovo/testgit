<template>
  <div class="swipe-wrap-h">
    <mt-swipe :auto="4000">
  <mt-swipe-item v-for="(item,index) in imgs" :key="index">
    <img :src="item.img">
  </mt-swipe-item>  
  </mt-swipe>
  </div>
</template>

<script>
export default {
  props:['imgs'],
  mounted(){
    console.log(this.imgs);
    
  }
}
</script>

<style lang="scss">
.swipe-wrap-h{
  height:200px;
  .mint-swipe{
    img{
    width: 100%;
    height: 100%;
    }
  }
}
</style>

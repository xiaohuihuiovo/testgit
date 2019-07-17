<template>
  <div>
      <mt-button size="normal" type="primary" @click="goDetail">去图片详情界面</mt-button>
    
  </div>
</template>
<script>
export default {
  methods:{
    goDetail(){
      this.$router.push('/home/photoinfo/37')
    }
  }
}
</script>
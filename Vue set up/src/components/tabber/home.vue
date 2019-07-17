<template>
  <div>
    home
    <swipe :imgs="arr"></swipe>
    <div>
      <mt-button size="normal" type="primary" @click="goGood">商品界面</mt-button>
      <mt-button size="normal" type="primary" @click="goPhoto">图片分享</mt-button>
    </div>
  </div>
</template>

<script>
import swipe from '../sub/swipe.vue'
export default {
  data(){
    return{
      arr:[]
    }
  },
  created(){
    this.getImg()
  },
  methods:{
    getImg(){
      this.$http.get('api/getlunbo').then(result=>{
        console.log(result);
        this.arr=result.data.message
        
      })
    },
    goGood(){
      this.$router.push('/home/goodlist')
    },
    goPhoto(){
      this.$router.push('/home/photolist')

    }
  },
  components:{
    swipe
  }
}
</script>



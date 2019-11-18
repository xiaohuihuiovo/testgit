<template>
  <div id="result">
    <el-input :value="$store.state.val"
              :disabled="true">
    </el-input>

  </div>
</template>

<script>
export default {
  data () {
    return {
      // val: this.$store.state.val
    }
  },
  methods: {
    // getVal (data) {
    //   this.$store.commit('updateVal', data)
    // }
  },
  created () {
  }
}
</script>

<style >
#result {
  /* height: 70px; */
  margin-top: 30px;
}
.el-input__inner {
  height: 60px !important;
}
</style>
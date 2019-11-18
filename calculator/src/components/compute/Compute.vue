<template>
  <div id="compute">
    <div class="com">
      <h1>简易计算器</h1>
      <Result></Result>
      <div class="number">
        <el-button @click="onClick(item)"
                   v-for="item in buttonList"
                   :key="item"
                   class="btn">{{item}} </el-button>
      </div>
      <el-button type="info"
                 class="clear"
                 @click="clear()">重置</el-button>
    </div>
  </div>
</template>

<script>
import Result from './Result'
export default {
  data () {
    return {
      buttonList: ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '/', '='],
      pointFlag: false,
      flag: true
    }
  },
  components: {
    Result
  },
  methods: {
    // evil (fn) {
    //   let Fn = Function;
    //   return new Fn('return' + fn)()
    // },
    onClick (sym) {
      if (sym === '=') {
        if (this.val.length < 1) {
          return this.$message.error('请先输入在求值')
        }
        return this.calculator()
      }
      if (sym === '+' || sym === '-' || sym === '*' || sym === '/') {
        return this.pushOperate(sym)
      } else if (sym === '.' && this.pointFlag) {
        return
      }
      this.pushNum(sym)
    },
    pushNum (sym) {
      this.val = this.val + sym
      this.flag = false
      if (sym === '.') this.pointFlag = true
    },
    pushOperate (num) {
      if (this.val.length === 0) {
        return this.$message.error('第一位不能是运算符')
      }
      if (this.flag) {
        this.val = this.val.substring(0, this.val.length - 1)
      }
      this.val += num
      this.flag = true
      this.pointFlag = false
    },
    calculator () {
      try {
        this.val = window.eval(this.val)
      } catch (err) {
        this.$message.error('请输入规范的运算符')
      }
      // var str = this.val + ''
      // if (str.indexOf('.') === 1) {
      //   str = parseFloat(str)
      //   this.val = window.eval(str).toFixed(2)
      // }
    },
    clear () {
      this.val = ''
    }
  },
  computed: {
    val: {
      get () {
        return this.$store.state.val
      },
      set (data) {
        this.$store.commit('updateVal', data)
      }
    }

  }
}
</script>

<style scoped>
#compute {
  margin: 250px auto;
  width: 600px;
  height: 680px;
  border: 4px solid #ccc;
  border-radius: 20px;
}
.com {
  padding: 50px;
}
.com h1 {
  margin-left: 150px;
  color: gray;
}
.number {
  flex: 1;
  margin: 20px 0 0 0;
}
.number .btn {
  margin: 5px 15px 5px 0;
  flex: 25%;
  flex-wrap: wrap;
  width: 110px;
  height: 65px;
}
.clear {
  margin-top: 17px;
  width: 100%;
  height: 70px;
}
</style>
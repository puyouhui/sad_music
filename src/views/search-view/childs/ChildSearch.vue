<template>
  <div>
    <search>
      <search-item class="logo">
        <span v-show='result_isshow==false'>
          <img src="@/assets/img/logo/bswk.png" alt="">
        </span>
        <span v-show='result_isshow==true' @click='back_click'>
          <img src="@/assets/img/search/back.png" alt="">
        </span>
      </search-item>

      <search-item class="input_box" :class='{input_box_is:result_isshow==false}'>
        <div class="mainbox">
          <span class="remove" v-show='prompt_isshow' @click='remove_input'>
            <img src="@/assets/img/search/x.png" alt="">
          </span>
          <!-- <span class="iconfont" slot="icon">&#xe625;</span> -->
          <input type="text" name="" id="search_ipunt" :placeholder="defaultValue" @input="inputFunction" ref='input'>
        </div>
      </search-item>

      <search-item class="search_box">
        <img src="@/assets/img/search/search.png" alt="" @click='go_search'>
        <!-- <span class="iconfont">&#xe618;</span> -->
      </search-item>

    </search>
    <collapse></collapse>
  </div>

</template>

<script>
  // 导入请求模块
  import {
    DefaultSearchValue,
  } from '@/network/search.js'

  import Search from '@/components/common/search/Search'
  import SearchItem from '@/components/common/search/SearchItem'
  //下面这个组件解决顶部塌陷的
  import Collapse from '@/components/common/search/Collapse'
  export default {
    name: 'ChildSearch',
    components: {
      Search,
      SearchItem,
      Collapse
    },
    props: {
      result_isshow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        defaultValue: '', //默认搜索词
        prompt_isshow: false, //清除小按键的显示隐藏
        wordvalue: '' //输入的数据
      }
    },
    created() {
      DefaultSearchValue()
        .then(res => {
          this.defaultValue = res.data.data.showKeyword
        })
    },
    mounted() {
      this.$refs.input.focus()
    },
    methods: {
      inputFunction() { //获得输入框数据，并判断提示隐藏与显示
        let value = document.querySelector('#search_ipunt').value
        this.wordvalue = value
        if (value.length >= 1) {
          this.prompt_isshow = true
        } else {
          this.prompt_isshow = false
        }
        this.$emit('prompt', this.prompt_isshow, this.wordvalue) //把两个值传到父组件
      },

      remove_input() { // 点击清除输入的功能
        this.wordvalue = ''
        document.querySelector('#search_ipunt').value = ''
        this.inputFunction()
      },

      go_search() { // 点击搜索事件
        this.$emit('go_search', this.wordvalue, this.defaultValue)
      },
      back_click() {
        this.$emit('back_click', this.wordvalue, this.defaultValue)
      }
    }
  }
</script>

<style scoped>
  .logo {
    flex: 1;
    /* font-size: 20px; */
  }

  .logo span {
    display: inline-block;
    width: 40px;
    height: 40px;
  }

  .logo span img {
    margin-top: 14px;
    width: 60%;
  }

  .input_box {
    box-sizing: border-box;
    position: relative;
    display: block;
    flex: 7;
  }

  .input_box div span {
    position: absolute;
    left: 15px;
    top: 1px;
    color: #333;
  }

  .input_box input {
    display: inline-block;
    box-sizing: border-box;
    width: 280px;
    height: 25px;
    border-radius: 12px;
    outline: none;
    padding-left: 15px;
    font-size: 12px;
    font-weight: 400;
    color: #666;
  }
  /* 清除按钮 */

  .mainbox {
    position: relative;
  }

  .mainbox .remove {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 0;
  }

  .mainbox .remove img {
    position: absolute;
    top: 16px;
    left: 240px;
    width: 100%;
  }

  .search_box {
    position: relative;
    flex: 1;
  }

  .search_box img {
    position: absolute;
    top: 14px;
    right: 10px;
    width: 65%;
  }
</style>

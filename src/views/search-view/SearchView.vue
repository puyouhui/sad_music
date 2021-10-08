<template>
  <div>
    <child-search @prompt='promptmessage' @go_search='go_search_result' :result_isshow='result_isshow'
      @back_click='back_click'>
    </child-search>
    <search-result v-show='result_isshow' :songs='songs' :wordvalue='wordvalue' :album_list='album_list'
      :Singer_list='Singer_list' :mv_list='mv_list'>
    </search-result>
    <search-advice v-if='prompt_isshow' :wordvalue='wordvalue' @directly_search='directly_search'></search-advice>
    <scroll :scroll_data='sliding_data'>
      <div slot="main_body">

        <child-history :result_history='result_history'
                       @go_search='go_search_result'
                       @empty_history='empty_history'
                       v-show='historyLength'
                       >
        </child-history>
        <recommended @go_search='go_search_result'></recommended>
        <hot-search-list @go_search='go_search_result'></hot-search-list>
        <ChildZone></ChildZone>
      </div>
    </scroll>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  //请求导入
  import {
    getSearchResult,
    getAlbumList,
    getSingerList,
    getMvdata,
  } from '@/network/search.js'

  //底部导航
  import MainTabBar from '@/components/content/MainTabBar'
  //搜索模块
  import ChildSearch from './childs/ChildSearch'
  //搜索输入时建议模块
  import SearchAdvice from './childs/SearchAdvice'
  //历史记录
  import ChildHistory from './childs/ChildHistory'
  //推荐搜索
  import Recommended from './childs/Recommended'
  //热搜榜
  import HotSearchList from './childs/HotSearchList'
  //点击搜索后展示的列表
  import SearchResult from '@/views/search-view/childs/SearchResult'
  import ChildZone from '@/views/search-view/childs/ChildZone'
  import Scroll from '@/components/common/scroll/Scroll' //滚动插件


  export default {
    name: 'SearchView',
    components: {
      MainTabBar,
      ChildSearch,
      ChildHistory,
      SearchAdvice,
      Recommended,
      HotSearchList,
      SearchResult,
      ChildZone,
      Scroll
    },
    data() {
      return {
        sliding_data: {
          content_height: 90
        },
        prompt_isshow: false, // 搜索建议窗口的展示与隐藏
        wordvalue: '', //输入的文字
        result_isshow: false, //搜索结果窗口展示隐藏
        result_word: '', //最终点击搜索的值
        result_history: [], // 搜索里历史数据
        songs: [], //歌曲搜素结果列表
        album_list: [], //请求的歌单数据
        Singer_list: [], //请求的歌手数据
        mv_list: [] //mv数据
      }
    },
    methods: {
      promptmessage(a, b) {
        // console.log('123');
        // console.log(data);
        this.prompt_isshow = a
        this.wordvalue = b
      },
      // 子组件传过来的搜索点击事件
      // 判断一下用户是否输入
      go_search_result(wordvalue) {
        // 关于历史记录
        console.log(this.result_history);

        if (this.result_history.length < 8) { //判断数组长度
          this.result_history.unshift(wordvalue) //在数组添加
          localStorage.setItem('result_history', JSON.stringify(this.result_history)) // 在本地储存中保存记录
        } else if (this.result_history.length == 8) {
          this.result_history.pop() //删除最后一个
          this.result_history.unshift(wordvalue) //在数组添加
          localStorage.setItem('result_history', JSON.stringify(this.result_history)) // 在本地储存中保存记录
        } else {
          this.result_history.pop() //删除最后一个
          this.result_history.unshift(wordvalue) //在数组添加
          localStorage.setItem('result_history', JSON.stringify(this.result_history)) // 在本地储存中保存记录
        }
        var history = []
        for (var i = 1; i <= this.result_history.length; i++) {
          if (history.indexOf(this.result_history[i]) == -1) {
            history.push(this.result_history[i])
          }
        }

        // 发送请求
        getSearchResult(wordvalue)
          .then(res => {
            // console.log(res);
            this.songs = res.data.result.songs
              // console.log(this.songs);
          })
        setTimeout(() => { // 定时器事件到再发送请求，以免页面卡顿
          getAlbumList(wordvalue) //歌单数据
            .then(res => {
              this.album_list = res.data.result.playlists
            })
          getSingerList(wordvalue) //歌手数据
            .then(res => {
              this.Singer_list = res.data.result.artists
                // console.log(this.Singer_list);
            })
          getMvdata(wordvalue) //mv数据
            .then(res => {
              this.mv_list = res.data.result.mvs
                // console.log(this.mv_list);
            })
        }, 1000)


        if (wordvalue < 1) {
          // this.result_word = defaultValue
          this.result_isshow = true
          this.prompt_isshow = false
        } else {
          this.result_word = wordvalue
          this.result_isshow = true
          this.prompt_isshow = false
        }
        console.log(this.result_word);
      },
      back_click() { // 返回隐藏搜索结果
        this.result_isshow = false
      },
      directly_search(data) { // 建议控件里面点击搜索
        this.result_isshow = true
        this.prompt_isshow = false
        this.go_search_result(data)
      },
      empty_history() { //清空搜索记录
        this.result_history.length = 0
        localStorage.setItem('result_history', JSON.stringify(this.result_history)) // 在本地储存中保存记录
        this.result_history = JSON.parse(localStorage.getItem('result_history'))
      }

    },
    created() {
      if (this.result_history.length == 0) {
        this.result_history = []
        localStorage.setItem('result_history', JSON.stringify(this.result_history)) // 在本地储存中保存记录
      }
      this.result_history = JSON.parse(localStorage.getItem('result_history'))
    },
    computed: {
      // 判断是否显示历史记录
      historyLength() {
        if (this.result_history == null || this.result_history.length == 0) {
          return false
        } else {
          return true
        }
      }
    }
  }
</script>

<style scoped>

</style>

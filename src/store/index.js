import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 关于登录
    login_store: false, //登录状态
    login_state: {}, //保存的登录信息
    // 关于歌单
    list_cover: {}, //传进来的歌单信息
    // 关于播放
    playing: false, //播放状态
    index: 0, //当前播放歌曲在播放列表的下标值
    durationTime: 0, //歌曲总时长
    playTime: 0, //从指定时间开始播放
    currentTime: '00:00', // 当前播放时间
    totalTime: '00:00', // 总播放时间
    currentTimeS: 0, //当前播放时间，单位：s
    lyric: [],
    progressScaleX: 0, // 播放进度
    thumbTranslateX: 0, // 进度条滑块位置
    volume: 0.5, // 音量进度
    playType: 1, // 播放类型：1-列表循环，2-随机播放，3-单曲循环
    listShow: false, // 播放列表是否展示
    song: {}, // 当前播放歌曲信息
    songList: [], // 歌曲列表
  },
  mutations,
  getters,
  actions,
  modules: {}
})

export default {
  // 登录相关功能

  //把登录信息保存到本地，不用每次都登录
  LoginState(state, login_data) {
    console.log(login_data);
    localStorage.login_data = login_data; //先将数据放到本地存储
  },

  //这个方法会记录一个歌单信息，需要传入一个歌单对象
  StorePlayList(state, cover_word) {
    state.list_cover = cover_word
  },

  // 每次重新进入页面，或刷新读取一下本地储存中的登录信息并存给state,比较方便使用
  StorageLoginStore(state) {
    state.login_state = JSON.parse(localStorage.getItem("login_data")) //给store里面登录赋值
  },


  //登录状态修改
  SetLoginStore(state, data) {
    state.login_store = data
  },


  // 播放相关功能
  //将单独歌曲添加进播放列表
  SetPlayList(state, data) {
    state.songList.unshift(data)
    localStorage.setItem('playlist', JSON.stringify(state.songList))
  },

  //初始化歌单，得到最新的数据
  InitializePlayList(state) {
    state.songList = JSON.parse(localStorage.getItem('playlist')) //数据变化，把本地储存歌单给状态管理
  },

  //添加播放
  setAddPlayMusic(state, data) {
    state.song = data //直接播放当前的音乐
    localStorage.setItem('playsong', JSON.stringify(data))
    state.playing = true;
    state.song = JSON.parse(localStorage.getItem('playsong'))
    state.smllPlayIsShow = false
    state.index = 0
    localStorage.setItem('indexSong', state.index)
    state.song = state.songList[(state.index)]
  },

  //初始化当前播放的歌曲,防止刷新数据丢失
  InitializeSong(state) {
    state.song = JSON.parse(localStorage.getItem('playsong'))
  },

  //播发和暂停
  MusicPaly(state) {
    if (state.playing) { // 播放中,点击则为暂停
      state.playing = false;
    } else { // 暂停中,点击则为播放
      state.playing = true;
    }
  },

  // 更新当前播放url，解决失效问题
  setMusicUrl(state, data) {
    state.song.url = data
    localStorage.setItem('playsong', JSON.stringify(state.song))
  },

  //停止播放
  playStop(state) {
    state.playing = false;
  },

  //播放列表的显示和隐藏
  listShowisOff(state) { //隐藏
    state.listShow = false
  },

  listShowisOn(state) { //显示
    state.listShow = true
  },

  // 清空播放列表
  removePlayList(state) {
    localStorage.removeItem('playlist');
    localStorage.setItem('playlist', JSON.stringify([]))
    state.songList = JSON.parse(localStorage.getItem('playlist'))
  },

  //播放模式 1-列表循环，2-随机播放，3-单曲循环
  playTypeShow(state) { //点击更换播放模式
    if (state.playType < 3) {
      state.playType++
    } else {
      state.playType = 1
    }
  },

  //下一首
  nextPlay(state) {
    if (state.index == state.songList.length - 1) {
      state.index = 0
    } else {
      state.index++
    }
    state.playing = true;
    state.song = state.songList[(state.index)]
    localStorage.setItem('indexSong', state.index)
    localStorage.setItem('playsong', JSON.stringify(state.song))
  },

  //上一曲
  prevPlay(state) {
    if (state.index == 0) {
      state.index = state.songList.length - 1
      localStorage.setItem('indexSong', state.index)
      state.song = state.songList[(state.index)]
      localStorage.setItem('playsong', JSON.stringify(state.song))
    } else {
      state.index--
        state.song = state.songList[(state.index)]
      localStorage.setItem('indexSong', state.index)
      localStorage.setItem('playsong', JSON.stringify(state.song))
    }
  },

  //初始化下标值
  palyIndex(state) {
    state.index = localStorage.getItem('indexSong')
  },

  //列表中播放指定下标值
  playCertain(state, index) {
    state.song = state.songList[index]
    localStorage.setItem('playsong', JSON.stringify(state.song))
    localStorage.setItem('indexSong', index)
    state.index = localStorage.getItem('indexSong', index)
  },

  //删除指定下标值
  removeSongIndex(state, index) {
    if (index < state.index) { // 需要更新一下下标值
      state.index--
        state.songList.splice(index, 1)
      localStorage.setItem('playlist', JSON.stringify(state.songList))
      state.songList = JSON.parse(localStorage.getItem('playlist'))
    } else if (index == state.index) { //如果删除的是本次播放，则删除后播放下一首
      console.log(123);
      state.song = state.songList[index + 1]
      state.songList.splice(index, 1)
      localStorage.setItem('playlist', JSON.stringify(state.songList))
      state.songList = JSON.parse(localStorage.getItem('playlist'))
    } else {
      state.songList.splice(index, 1)
      localStorage.setItem('playlist', JSON.stringify(state.songList))
      state.songList = JSON.parse(localStorage.getItem('playlist'))
    }
  },

  //修改当前播放时间
  setCurrentTime(state, time) {
    state.currentTime = time
  },

  //修改总播放时间
  setTotalTime(state, time) {
    state.totalTime = time
  },

  //修改当前进度
  setProgressScaleX(state, precent) {
    // console.log(precent);
    state.progressScaleX = precent.toFixed(2);
  },

  //播放总时长 单位 s
  setdurationTime(state, duration) {
    state.durationTime = duration
  },

  // 当前播放时间 单位s
  CurrentTime(state, time) {
    state.currentTimeS = time;
  },
  // 从指定时间开始播放
  setPlayTime(state, time) {
    state.playTime = time
  },

  //时间修改后，需要重置一下进度百分比
  setprogressScaleX(state, time) {
    state.progressScaleX = time
  },

  // 记录音量
  steVolume(state, value) {
    state.volume = value
    localStorage.setItem('volume', value)
  },

  // 把歌词保存
  setLyric(state, text) {
    state.lyric = text
  }
}
<template>
  <!-- 精选歌单 -->
  <div class="Selected-playlists">
    <div class="playlists-title">
      <i>精选歌单</i>
    </div>
    <div class="home-palylisi">
      <ul>

        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>

                
        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>

                
        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>

                
        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>

                
        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>

                
        <li>
          <div>
            <span class="iconfont amount-play">&#xe885;<i>217.4万</i></span>
            <img src="http://p1.music.126.net/_gMDRNW8RoCvJWHi_p51aA==/109951164726735349.jpg?imageView=1&type=webp&thumbnail=369x0" alt="">
            <div class="playlist-name">百万评论热歌全集丨时实更新中</div>
          </div>
        </li>


      </ul>
    </div>
  </div>
  </template>

<script>
  export default {
    name: 'HomePlayList'
  }
</script>

<style scoped>
  .Selected-playlists {
    width: 100%;
    height: 100%;
  }
  
  .playlists-title {
    line-height: 30px;
    font-size: 12px;
    color: #333;
    font-style: normal;
  }
  
  .playlists-title i {
    border-left: 3px solid #D43C33;
    padding-left: 10px;
  }
  
  .amount-play {
    font-size: 18px;
    font-weight: 500;
  }
  
  .amount-play i {
    font-size: 12px;
    color: #fff !important;
    vertical-align: middle;
  }
  
  .playlist-name {
    width: 100%;
    box-sizing: border-box;
    color: #333;
    font-size: 10px;
    line-height: 12px;
    padding-left: 5px;
    padding-right: 5px;
  }
  
  .home-palylisi ul {
    display: flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    margin-top: 5px;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
  }
  
  .home-palylisi ul li {
    box-sizing: border-box;
    float: left;
    width: 33%;
    padding-left: 1px;
    padding-right: 1px;
    margin-bottom: 16px;
  }
  
  .home-palylisi ul li div {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .home-palylisi ul li div span {
    position: absolute;
    right: 4px;
    top: 3px;
    color: #fff;
  }
  
  .home-palylisi ul li div img {
    width: 100%;
  }
  
  .home-palylisi ul li div p {
    padding: 2px;
    font-size: 12px;
    color: #333;
  }
</style>
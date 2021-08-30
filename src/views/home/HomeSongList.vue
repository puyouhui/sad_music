<template>
<div>
  <div class="Selected-song">
    <span class="playlists-title">
      <i>精选单曲</i>
    </span>
  </div>
  <div class="home-songlist">
    <ul>
      <li>
        <div>
          <div class="sgchfl">
            <div class="f-thide-sgtl">Visiting Hours</div>
            <div class="f-thide-sginfo">Ed Sheeran</div>
          </div>
          <span class="iconfont sgchfl-icon">&#xe62d;</span>
        </div>
      </li>
      <li>
        <div>
          <div class="sgchfl">
            <div class="f-thide-sgtl">Visiting Hours</div>
            <div class="f-thide-sginfo">Ed Sheeran</div>
          </div>
          <span class="iconfont sgchfl-icon">&#xe62d;</span>
        </div>
      </li>
      <li>
        <div>
          <div class="sgchfl">
            <div class="f-thide-sgtl">Visiting Hours</div>
            <div class="f-thide-sginfo">Ed Sheeran</div>
          </div>
          <span class="iconfont sgchfl-icon">&#xe62d;</span>
        </div>
      </li>
      <li>
        <div>
          <div class="sgchfl">
            <div class="f-thide-sgtl">Visiting Hours</div>
            <div class="f-thide-sginfo">Ed Sheeran</div>
          </div>
          <span class="iconfont sgchfl-icon">&#xe62d;</span>
        </div>
      </li>
      <li>
        <div>
          <div class="sgchfl">
            <div class="f-thide-sgtl">Visiting Hours</div>
            <div class="f-thide-sginfo">Ed Sheeran</div>
          </div>
          <span class="iconfont sgchfl-icon">&#xe62d;</span>
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
  .Selected-song {
    margin-top: 10px;
  }
  
  .playlists-title {
    font-size: 12px;
    color: #333;
    padding-left: 10px;
    font-style: normal;
    border-left: 3px solid #D43C33;
  }
  
  .home-songlist ul {
    margin-top: 10px;
  }
  
  .home-songlist ul li {
    box-sizing: border-box;
    padding: 6px 0;
    margin-left: 15px;
    height: 50px;
    border-bottom: 1px solid rgb(243, 243, 243);
    /* border-bottom-width: 1px; */
    position: relative;
  }
  
  .sgchfl {
    display: inline-block;
    flex: 1 1 auto;
  }
  
  .sgchfl .f-thide-sgtl {
    /* overflow: hidden; */
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    font-size: 16px;
    color: #333;
  }
  
  .sgchfl .f-thide-sginfo {
    font-size: 12px;
    color: #888;
    margin-top: 10px;
  }
  
  .sgchfl-icon {
    color: #888;
    position: absolute;
    right: 20px;
    top: 15px;
    font-size: 24px;
  }
</style>
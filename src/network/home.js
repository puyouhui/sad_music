import { request } from '@/network/request.js'
import { getCookie } from '@/util/util.js' //cookie

//轮播图请求
export function getHomeMultidata() {
  return request({
    url: '/banner'
  })
}

//推荐歌单
export function getPlayMusicList() {
  return request({
    url: '/top/playlist/highquality?cookie=' + getCookie() + '&limit=6'
  })
}

//推荐单曲 10首
export function getNewMusicList() {
  return request({
    url: '/personalized/newsong'
  })
}

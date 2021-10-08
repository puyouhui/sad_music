// 歌曲列表相关请求
import { request } from '@/network/request.js'
import { getCookie } from '@/util/util.js' //cookie


//默认歌单信息和歌曲
export function getSongList(data) {
  return request({
    url: '/playlist/detail?id=' + data + '&cookie=' + getCookie()
  })
}

// 获取歌曲详情，多id
export function getSongDetailed(id) {
  return request({
    url: '/song/detail' + '?ids=' + id + '&cookie=' + getCookie()
  })
}
// 获取歌曲播放url
export function getSongPlayUrl(id) {
  return request({
    url: '/song/url?id=' + id + '&cookie=' + getCookie()
  })
}

//获取歌词
export function GetLyric(id) {
  return request({
    url: '/lyric?id=' + id + '&cookie=' + getCookie()
  })
}

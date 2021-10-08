// 歌手相关请求
import { request } from '@/network/request.js'
import { getCookie, getloginId } from '@/util/util.js'


//获取默认热门歌手
export function getAuthorlist() {
  return request({
    url: '/top/artists?uid=' + getloginId() + '&cookie' + getCookie()
  })
}

// 获取华语歌手排行
export function getChineselist() {
  return request({
    url: '/toplist/artist?type=1&uid=' + getloginId() + '&cookie' + getCookie()
  })
}
// 获取欧美歌手排行
export function getUnitedlist() {
  return request({
    url: '/toplist/artist?type=2&uid=' + getloginId() + '&cookie' + getCookie()
  })
}
// 获取日本歌手排行
export function getJapanlist() {
  return request({
    url: '/toplist/artist?type=4&uid=' + getloginId() + '&cookie' + getCookie()
  })
}
// 获取韩国歌手排行
export function getKorealist() {
  return request({
    url: '/toplist/artist?type=3&uid=' + getloginId() + '&cookie' + getCookie()
  })
}

// 获取歌手详情
export function getArtistDetailed(data) {
  return request({
    url: '/artist/detail?id=' + data + '&cookie' + getCookie()
  })
}

//获取歌手热门50首
export function getArtistHotSong(data) {
  return request({
    url: '/artist/top/song?id=' + data + '&cookie' + getCookie()
  })
}

//获取详情
export function getArtistDescribe(data) {
  return request({
    url: '/user/detail?uid=' + data + '&cookie' + getCookie()
  })
}

// 歌单相关请求
import { request } from '@/network/request.js'
import { getCookie, getloginId } from '@/util/util.js'

// 获取歌单分类
export function getPlayListSquare() {
  return request({
    url: '/playlist/catlist?uid=' + getloginId() + '&cookie' + getCookie()
  })
}

//获取推荐歌单
export function getPlayListCatList() {
  return request({
    url: '/top/playlist?uid=' + getloginId() + '&cookie' + getCookie()
  })
}

// 获取精品歌单
export function getGoodsList() {
  return request({
    url: '/top/playlist/highquality?limit=30&uid=' + getloginId() + '&cookie' + getCookie()
  })
}

// 获取华语歌单
export function getChinese() {
  return request({
    url: '/top/playlist?limit=30&cat=华语&uid=' + getloginId() + '&cookie' + getCookie()
  })
}

// 获取民谣歌单
export function getFolk() {
  return request({
    url: '/top/playlist?limit=30&cat=民谣&uid=' + getloginId() + '&cookie' + getCookie()
  })
}

//流行数据
export function getPopular() {
  return request({
    url: '/top/playlist?limit=30&cat=流行&uid=' + getloginId() + '&cookie' + getCookie()
  })
}

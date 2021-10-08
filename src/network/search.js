import { request } from '@/network/request.js'

//默认搜索关键词
export function DefaultSearchValue() {
  return request({
    url: '/search/default'
  })
}

// 热门搜素列表
export function getRecommenDation() {
  return request({
    url: '/search/hot/detail'
  })
}


// 建议搜索
export function getInputSearch(data) {
  return request({
    url: '/search/suggest?keywords= ' + data
  })
}

// 最终搜索
export function getSearchResult(data) {
  return request({
    url: '/cloudsearch?keywords=' + data
  })
}

//最终搜索-歌单
export function getAlbumList(data) {
  return request({
    url: '/cloudsearch?keywords=' + data + '&type=1000' + '&limit=20'
  })
}

// 最终搜索-歌手
export function getSingerList(data) {
  return request({
    url: '/cloudsearch?keywords=' + data + '&type=100' + '&limit=5'
  })
}

// 最终搜索-mv
export function getMvdata(data) {
  return request({
    url: '/cloudsearch?keywords=' + data + '&type=1004' + '&limit=3'
  })
}

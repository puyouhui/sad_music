// 排行榜相关请求
import { request } from '@/network/request.js'

// 请求总数据
export function getRanKingData() {
  return request({
    url: '/toplist'
  })
}

//请求排行主页上的详细数据
export function getOfficialdetailed(id) {
  return request({
    url: '/playlist/detail?id=' + id,
  })
}

// 请求最后那个Mv的数据
export function getMVData() {
  return request({
    url: '/top/mv?limit=3',
  })
}

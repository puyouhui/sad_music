// 每日推荐请求相关
import { request } from '@/network/request.js' //封装的请求

import { getCookie } from '@/util/util.js' //cookie
//请求每日歌曲
export function getDayRecommend() {
  return request({
    url: '/recommend/songs?cookie' + getCookie(),
  })
}

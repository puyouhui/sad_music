import { request } from '@/network/request.js'
import { getCookie, getloginData, getloginId } from '@/util/util.js'
var timestamp = Date.parse(new Date()); //防止缓存，添加时间

//获取用户信息 , 歌单，收藏，mv, dj 数量
export function getProfilePlayList() {
  return request({
    url: '/user/playlist?uid=' + getloginId() + '&cookie=' + getCookie() + '&timestamp=' + timestamp + '&limit=50'
  })
}


// 签到


export function getSignin() {
  return request({
    url: '/daily_signin?cookie=' + getCookie() + '&uid=' + getloginId()
  })
}
// 登录相关请求
import { request } from '@/network/request.js'
import { getCookie, getloginData, getloginId } from '@/util/util.js'
// 验证码登录
export function VerificationCodeLogin(number, verify) {
  return request({
    url: '/login/cellphone?phone=' + number + '&captcha=' + verify,
    // withCredentials: true,
  })
}

// 发送验证码
export function SendVerificationCode(number) {
  return request({
    url: '/captcha/sent?phone=' + number
  })
}

//验证验证码
export function QueryVerificationCode(number, verify) {
  return request({
    url: '/captcha/verify?phone=' + number + '&captcha=' + verify
  })
}

// 退出登录
export function LoginOut() {
  return request({
    url: '/logout?cookie=' + getCookie(),
  })
}

// 登录状态
export function Loginstatus() {
  return request({
    url: '/login/status?cookie=' + getCookie(),
  })
}

//刷新登录状态
export function LoginRefresh() {
  return request({
    url: '/login/refresh?cookie=' + getCookie(),
  })
}


//密码登录
export function PasswordLogin(phone, password) {
  return request({
    url: '/login/cellphone?phone=' + phone + '&password=' + password,
  })
}

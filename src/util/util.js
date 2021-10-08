// 主要管理用户的登录
const that = this
  //获取用户信息
export function getloginData() {
  let user_cookie = JSON.parse(localStorage.getItem("login_data"))
  if (user_cookie != null)
    return (user_cookie.profile);
  else
    return null;
}

//获取登录用户id
export function getloginId() {
  let user_cookie = JSON.parse(localStorage.getItem("login_data"))
  if (user_cookie != null) {
    return user_cookie.account.id;
  }
}

//获取cookie、
export function getCookie() {
  let user_cookie = JSON.parse(localStorage.getItem("login_data"))
  if (user_cookie != null)
    return (user_cookie.cookie);
  else
    return null;
}

//删除cookie
export function delCookie() {
  localStorage.removeItem("login_data")
};


// 检测登录状态
export function QueryLogin() {
  let user_cookie = JSON.parse(localStorage.getItem("login_data"))
  if (user_cookie == '' || user_cookie == null) {
    return false
  } else {
    return true
  }
}

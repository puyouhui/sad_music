// axios的二次封装
import axios from "axios";

export function request(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://81.68.114.82:3000',
    timeout: 5000,
    // xhrFields: { withCredentials: true }
  })
  axios.defaults.withCredentials = true; //允许跨域携带cookie信息
  //2.axios拦截器
  // axios.defaults.withCredentials = true
  instance.interceptors.request.use(config => {
    // console.log(config);
    // 请求拦截的作用
    //1.比如config中的一些信息不符合服务器要求
    //2.比如在请求的时候显示一个图标
    //3.某些网络请求（比如登陆），必须携带一些特殊的信息
    return config
  }, err => {
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res
  }, err => {
    console.log(err);
    console.log('请求出问题了');
    // console.log(encodeURIComponent(getCookie()));

    // Loginstatus(getCookie())
    //   .then(res => {
    //     console.log(res);
    //   })
  })

  //3.发送请求
  return instance(config)

}

import axios from "axios";
import router from "@/router";
import { Message } from "@arco-design/web-vue";
// 创建axios实例
const service = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no"
  }
});
// 请求拦截器
service.interceptors.request.use(
  function (config: any) {
    // 发送请求之前做什么
    // 获取token鉴权
    let userInfo: any = {};
    if (localStorage.getItem("user-info")) {
      userInfo = JSON.parse(localStorage.getItem("user-info") as string);
    }
    if (userInfo.token) {
      // 有token，在请求头中携带token
      config.headers.Authorization = userInfo.token;
    }
    return config;
  },
  function (error: any) {
    // 请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  function (response: any) {

    let res = response.data;
    if (res.code == 401) {
      console.log("---- error");
      Message.error("登录状态已过期");
      router.push("/login");
      return Promise.reject(res);
    } else if (res.code == 404) {
      Message.error("请求连接超时");
      return Promise.reject(res);
    } else if (res.code != 200) {
      Message.error(res.msg);
      return Promise.reject(res);
    } else {
      // 返回数据
      return Promise.resolve(res);
    }
  },
  function (error: any) {
    console.log("---- error");
    Message.error(error.response.data.msg);
    localStorage.removeItem("user-info");
    router.push("/login");
    return Promise.reject(error);
  }
);
export default service;

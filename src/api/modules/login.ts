import http from "../https";
// 登录
export const LoginAPI = (data: any) => {
  return http.post("login", data);
};

// system - management

export const Userlist = params => {
  return http.get("/user/list", params);
};

export const UserAdd = data => {
  return http.post("/user/add", data);
};

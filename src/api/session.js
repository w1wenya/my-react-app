//#主要实现跟用户相关的接口

import axios from './index'
let url = 'http://localhost:3000';
export const login = (userInfo) =>{
    return axios.post(url+'/login',userInfo)
}
//注册
export const reg = (userInfo) =>{
    return axios.post(url+'/reg',userInfo)
}
export const validate = () =>{
    return axios.get(url+'/validate')
}
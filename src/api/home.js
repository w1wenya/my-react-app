import axios from 'axios'
let url = 'http://localhost:3000';
//axios.default.baseURL = 'http://localhost:3000'
axios.interceptors.response.use(function (res) {
    return res.data
})
export let getSliders = ()=>{
   return axios.get(url+'/sliders')
}
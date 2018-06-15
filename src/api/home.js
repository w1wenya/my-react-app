import axios from './axios'
axios.default.baseURL = 'http://localhost:3000'
axios.interceptors.response.use(function (res) {
    return res.data
})
export let getSliders = ()=>{
   return axios.get('/sliders')
}
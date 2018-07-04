import axios from './index'
let url = 'http://localhost:3000';
export let getSliders = ()=>{
   return axios.get(url+'/sliders')
}
export let getLessons = (limit,offset,type) =>{
    return axios.get(url+`/lessons?limit=${limit}&offset=${offset}&type=${type}`)
}
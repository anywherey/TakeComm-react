import axios,{AxiosRequestConfig,AxiosResponse,AxiosError} from 'axios'
axios.defaults.headers['Countent-Type']='application/json;charset=utf-8'
const service:any=axios.create({
  // baseURL:process.env.REACT_APP_BASE_API,
  baseURL:"http://192.168.3.81:3000",
  timeout:500
})

service.interceptors.request.use((config:AxiosRequestConfig)=>{
  return config
},
(error:AxiosError)=>{
  return Promise.reject(error)
}
)

service.interceptors.response.use((res:AxiosResponse)=>{
   // 二进制数据则直接返回
   if(res.request.responseType ===  'blob' || res.request.responseType ===  'arraybuffer'){
    return res.data
  }

  if(res){
    if(res.data.code===200 || res.data.code ===304){
      return res.data
    }else if (res.data.code ===401){
      location.href='/login'
    }else{
      throw res.data
    }
  }else{
    throw {data:'网络错误'}
  }
},(error:AxiosError)=>{
  return Promise.resolve(error.response)
})

export default service
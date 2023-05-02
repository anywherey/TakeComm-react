import request from '@/utils/request'

export function login(param:any){
    return request({
        url:'/login',
        method:'get',
        params:param
    })
}
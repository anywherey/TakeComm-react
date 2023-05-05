import Cookies from 'js-cookie'

 const TokenKey = 'takeoutKey123'
// import {encrypt,decrypt} from '@/utils/encrypt'
// const TokenKey="tokenkey"
export function getToken() {
 return Cookies.get(TokenKey)

  // return utils.decrypt(localStorage.getItem(utils.encrypt(TokenKey)))
  // return decrypt(localStorage.getItem(TokenKey)||'')
}

export function setToken(token:string,expires:any) {
    expires=parseExpires(expires)
 return Cookies.set(TokenKey, token,{ expires: expires})

  // return localStorage.setItem(utils.encrypt(TokenKey), utils.encrypt(token))
// const encyToken=encrypt(token)
// if(!encyToken){
//   return false
// }else{
//   return localStorage.setItem(TokenKey, encyToken)
// }
}

// export function setToken(token:any,expires:any) {
  //  expires=parseExpires(expires)
//  return Cookies.set(TokenKey, token,{ expires: expires})

//   // return localStorage.setItem(utils.encrypt(TokenKey), utils.encrypt(token))

//   return localStorage.setItem("token", token)
// }

export function removeToken() {
   return Cookies.remove(TokenKey)

  // return localStorage.removeItem(utils.encrypt(TokenKey))

  // return localStorage.removeItem(TokenKey)

}

function parseExpires(str:string) {
    const num = parseInt(str.substring(0, str.length-1));
    const unit = str.charAt(str.length-1).toLowerCase();
    let days;
  
    if (unit === 'h') {
      days = num / 24;
    } else if (unit === 'm') {
      days = num / 1440; // 1440 = 24 * 60
    } else if (unit === 's') {
      days = num / 86400; // 86400 = 24 * 60 * 60
    } else {
      throw new Error('有错误的时间格式！');
    }
  
    return days;
  }
  

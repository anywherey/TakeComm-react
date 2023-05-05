
import './index.less'
import { loginAPI} from '@/api/common'
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '@/utils/authority';
import { setUserInfo,setUserToken } from '@/store';
export default function Login() {
    const dispatch = useDispatch();
    const useSelect=useSelector((state)=>console.log(state))
    // const userInfo = useSelector((state) => state.user.userInfo);
    function loginConfirm() {
        loginAPI({
            userName: 'admin',
            password: '123456'
        }).then((res:any) => {
            console.log(res)
            if(res.code===200){
            //登录成功，将userInfo存入store中
            dispatch(setUserInfo(res.data));
            // token存储
            setToken(res.token,res.expires)
            dispatch(setUserToken(res.token))
            console.log(useSelect)
            }
        })
    }
    return (
        <section className='login'>
            <h2>登录</h2>
            <div className='login-row'>
                <input type={'text'} placeholder={" "}></input>
                <label form={'userName'}>用户名称</label>
            </div>
            <div className='login-row'>
                <input type={"password"} placeholder={" "}></input>
                <label form={'password'}>密码</label>
                <button>{">"}</button>
            </div>
            <button onClick={loginConfirm}>确定</button>
        </section>
    )
}
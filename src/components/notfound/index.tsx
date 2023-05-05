
import { Button } from 'react-vant';
import './index.less'
import imgerro from '@/assets/pics/404.png'
import { useNavigate, NavigateFunction } from 'react-router-dom';

const NotFound:React.FC<React.HTMLAttributes<HTMLDivElement>>=({...rest})=>{
const navigate: NavigateFunction=useNavigate()
    function back(){
        navigate(-1)
    }
    return (
        <div className="missing" {...rest}>
        <div>
          <img className="missing-pic" src={imgerro} alt="" />
          <div className="missing-title" >页面出错</div>
          <Button className="missing-subtitle" round onClick={back} >回到上一页</Button>
        </div>
        </div>
    )
}
export default NotFound

import { Button } from 'react-vant';
const NotFound=()=>{
    function back(){
        console.log('back')
    }
    return (
        <div className="missing">
        <div>
          <img className="missing-pic" src="@/assets/pics/404.png" alt="" />
          <div className="missing-title" >页面出错</div>
          <Button className="missing-subtitle" round onClick={back} >回到上一页</Button>
        </div>
        </div>
    )
}
export default NotFound
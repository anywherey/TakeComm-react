import { Tabbar } from 'react-vant'
import { HomeO, SettingO } from '@react-vant/icons'
import Router from '@/router/h5/h5'
import {NavLink,Outlet} from "react-router-dom";
function App() {
  return (
    <>
      <Outlet></Outlet>
      <Tabbar>
        <Tabbar.Item icon={<HomeO />}><NavLink className='navLink' to="/home">首页</NavLink></Tabbar.Item>
        <Tabbar.Item icon={<SettingO />} ><NavLink className='navLink' to="/my">我的</NavLink></Tabbar.Item>
      </Tabbar>
      {/* {curName}
    {curName==='home'?<Home></Home>:<My></My>}
    <Tabbar fixed={true} onChange={tabChange}>
    <Tabbar.Item icon={<HomeO />} name={'home'}>首页</Tabbar.Item>
    <Tabbar.Item icon={<SettingO />} name={'my'}>我的</Tabbar.Item>
  </Tabbar> */}
    </>
    //   <BrowserRouter>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/about" component={my} />
    //   </Switch>
    // </BrowserRouter>
  )
}

export default App

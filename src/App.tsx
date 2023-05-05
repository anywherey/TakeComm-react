import './App.css'
import Router from '@/router/h5/h5'
import { HashRouter } from "react-router-dom";
function App() {

  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
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

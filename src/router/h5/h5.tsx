import {useRoutes,Navigate,RouteObject } from "react-router-dom";
import Home from '../../views/home/index.tsx'
import My from '../../views/my/index.tsx'
import Main from '../../views/layout/index.tsx'
import NotFound from "@/components/notfound";
import Shopdetails from '@/views/shopDetails'
import Login from '@/views/login'
import Goodsdetails from '@/views/goodsdetails'
import PayPage from '@/views/payPage'
import NavitionTop from '@/components/NavitionTop';
import { getToken } from '@/utils/authority';
// 是否需要登录
function requireAuth(routes:React.ReactNode | null) {
    if (getToken()) {
      return routes;
    } else {
      return <Navigate to="/login" />;
    }
}
// 需要导航栏及种类
function requireNav(routes:React.ReactNode | null,navType?:number) {
  if (!navType||navType!=0) {
    return (
      <>
      <NavitionTop navType={navType}/>
      {routes}
      </>
      )
  } else {
    return (
      <>
      <NavitionTop />
      {routes}
      </>
      )
  }
}
// 权限
const guardedRoutes:RouteObject[]= [
  {
    path:'/goodsDetails',
    element: requireAuth(requireNav(<Goodsdetails goodsList={{}} />))
  },
  {
    path:'/payPage',
    element: requireAuth(requireNav(<PayPage addressChoosing={{}}/>))
  },
]

const routes:RouteObject[]=[
    {
        path: '*',
        element: <NotFound/>
      },
      {
        path: '/login',
        element: <Login/>
      },
    {
    path: '/',
    element: <Main />,
    children: [
      {
        path: "",
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/my',
        element: <My />
      },
    ]
  },
  { 
    path:'/shopDetails',
    element:requireNav(<Shopdetails />,3)
  },
  ...guardedRoutes
]
// const RouterPage=()=>{
//     return(
//         <HashRouter>
//             <Routes>
//                 <Route path="/" element={<Navigate to="/home"/>}>
//                     <Route path="/home" element={<Home />} />
//                     <Route path="/my"  element={<My />} />
//                 </Route>
//             </Routes>
//         </HashRouter>
//     )
// }
export default function Router(){
    const router=useRoutes(routes)
    return router
}
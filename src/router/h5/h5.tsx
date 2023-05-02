import {useRoutes,RouteObject } from "react-router-dom";
import Home from '../../views/home/index.tsx'
import My from '../../views/my/index.tsx'
import Main from '../../views/layout/index.tsx'
import NotFound from "@/views/components/notfound";

const routes:RouteObject[]=[
    {
        path: '*',
        element: <NotFound/>
      },
    {
    path: '/',
    element: <Main />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: '/my',
        element: <My />
      },
    ]
  }
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
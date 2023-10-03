import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider,} from 'react-router-dom'
import myCreatedRoute from './Route/Route'


// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayOut></MainLayOut>,
//     children: [
//       {
//         path: "/home",
//         element: <Home></Home>
//       },

//       {
//         path: "/products",
//         element: <Products></Products>
//       }
//     ]
//   },
// ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)

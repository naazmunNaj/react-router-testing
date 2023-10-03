
import Home from '../layouts/Pages/Home/Home';
import MainLayOut from '../layouts/MainLayOut';
import {createBrowserRouter} from 'react-router-dom'
import Products from '../layouts/Pages/Products/Products';
import Dashboard from './../layouts/Pages/Dashboard/Dashboard';
import Footer from '../layouts/Pages/Footer/Footer';
import Product from '../layouts/Pages/Product/Product';
import Cart from '../layouts/Pages/Cart/Cart';
import Profile from '../layouts/Pages/Profile/Profile';
import About from '../layouts/Pages/About/About';
import DashboardLayout from '../layouts/Pages/DashboardLayout';

const myCreatedRoute = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/products",
          element: <Products></Products>,
          loader: () => fetch(`https://dummyjson.com/products`),
        },
        {
          path: "/products/:id",
          element: <Product></Product>,
          loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`),
        },

        {
          path: "/dashboard",
          element: <DashboardLayout></DashboardLayout>,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard></Dashboard>,
            },
            {
              path: "/dashboard/profile",
              element:<Profile></Profile>,
            },
            {
              path: "/dashboard/about",
              element:<About></About>,
            },
          ]
        },
        {
          path: "/cart",
          element: <Cart></Cart>,
        }
      ]
    },
    {
        path: "/footer",
        element : <Footer></Footer>,
    }
  ])
export default myCreatedRoute;
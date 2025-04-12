import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import Home from './screens/home'
import Product from './screens/product'
import Contact from './screens/contact'
import SingleProduct from './screens/singleproduct'
// import './index.css'
// import App from './App.jsx'



const router= createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[{
    path:"home",
    element:<Home/>,


  },
  {
    path:"product",
    element:<Product/>,
  }
  ,{
    path:"contact",
    element:<Contact/>,
  }
  ,{
    path:"singleproduct/:id",
    element:<SingleProduct/>
  }
  ,{
    path:"*",
    element:<Home/>
  }





],
}])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)

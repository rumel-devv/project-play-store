import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import ErrorPage from './Error/ErrorPage'
import Homepage from './pages/Homepage/Homepage'
import Apps from './pages/Allapps/Apps'
import InstaledApps from './pages/InstalledApps/InstaledApps'
import Contribute from './pages/contribute/Dashboard'
import Dashboard from './pages/contribute/Dashboard'


const router = createBrowserRouter(
  [
    {
      path:'/',
      element:<RootLayout></RootLayout>,
      children:[
        {
          path:'/',
          element:<Homepage></Homepage>
        },
        {
          path:'/apps',
          element:<Apps></Apps>
        },
        {
          path:'/instalation',
          Component:InstaledApps
        },
        {
          path:'/Dashboard',
          Component:Dashboard 
        }
       
      ],
      errorElement:<ErrorPage></ErrorPage> 

    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)

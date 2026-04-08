import { createBrowserRouter } from 'react-router'
import ErrorPage from '../Error/ErrorPage'
import Homepage from '../pages/Homepage/Homepage'
import Apps from '../pages/Allapps/Apps'
import InstaledApps from '../pages/InstalledApps/InstaledApps'
import Dashboard from '../pages/contribute/Dashboard'
import RootLayout from '../layout/RootLayout'
import Appdetails from '../pages/Appdetails/Appdetails'

export const router = createBrowserRouter(
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
        },
        {
          path:'/apps/:id',
          Component:Appdetails
        }
       
      ],
      errorElement:<ErrorPage></ErrorPage> 

    }
  ]
)
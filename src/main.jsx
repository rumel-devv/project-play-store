import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Routes'
import InstallAppsProvider from './context/InstallAppsProvider'
import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <InstallAppsProvider> 
      <RouterProvider router={router} ></RouterProvider>
      <ToastContainer></ToastContainer>
    </InstallAppsProvider>
  </StrictMode>,
)

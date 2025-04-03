import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from './pages/LoginPage.tsx'
import Dashboard from './pages/Dashboard.tsx'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import './index.css'

const router = createBrowserRouter([
  {
    path: '/admin',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)

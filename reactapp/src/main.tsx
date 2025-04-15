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
import  { store } from './redux/store.tsx'
import { Provider } from 'react-redux';
import User from './pages/User.tsx'
import Layout from './components/layout.tsx'
import AuthMiddleware from './middleware/authMiddleware.tsx'
import NoAuthMiddleware from './middleware/NoAuthMiddleware.tsx'

const router = createBrowserRouter([
  {
    path: '/admin',
    element: (
      <NoAuthMiddleware>
        <Login />
      </NoAuthMiddleware>
    )
  },
  {
    path: '/',
    element: (
      <AuthMiddleware>
        <Layout />
      </AuthMiddleware>
    ),
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: '/user',
        element: <User />,
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(

    <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
    </Provider>

)

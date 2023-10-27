import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import Login from '../views/login'

const router: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: <Navigate to={'/login'} />
  }
]

export default createBrowserRouter(router)

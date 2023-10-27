import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom'
import Login from '../views/login'
import MyLayout from '../layout'
import Account from '../views/account'

const router: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    element: <MyLayout />,
    children: [
      {
        path: '/account',
        element: <Account />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={'/account'} />
  }
]

export default createBrowserRouter(router)

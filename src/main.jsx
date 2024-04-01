import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Order from './components/Order.jsx';
import PrivateRoute from './components/routes/PrivateRoute.jsx';
import Profile from './components/Profile.jsx';
import DashBord from './components/DashBord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },

      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/orders",
        element: <PrivateRoute><Order></Order></PrivateRoute>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><DashBord></DashBord></PrivateRoute>
      },
    ],
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)

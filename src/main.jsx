import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import ArticleFull from './pages/ArticleFull.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Profile } from './pages/Profile.jsx';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  },
  {
    path: '/post/:id',
    element: <ArticleFull />
  },
  {
    path: '/user/login',
    element: <Login />
  },
  {
    path: '/user/signup',
    element: <Signup />
  },
  {
    path:'/user/profile',
    element: <Profile />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './pages/Homepage.jsx';
import ArticleFull from './pages/ArticleFull.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Disclaimer } from './pages/Disclaimer.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
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
    path: '/disclaimer',
    element: <Disclaimer />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

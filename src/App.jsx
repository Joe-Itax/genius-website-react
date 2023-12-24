import React from 'react';
// import { Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'animate.css';
import 'remixicon/fonts/remixicon.css'

import Layout from './components/layout/layout';

// import './App.css';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
  }
])

export default function App() {
  return <RouterProvider router={routes} />
}

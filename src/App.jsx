import React from 'react';
// import { Navigate } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'animate.css';
import 'remixicon/fonts/remixicon.css'

import CustomTailwindClassNameProvider from './components/customTailwindClassName/customTailwindClassNameProvider.jsx';
import Layout from './components/layout/layout';
import Home from './pages/home';
import About from './pages/about';
import Realisations from './pages/realisations';
import Services from './pages/services';
import Contact from './pages/contact';

// import './App.css';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children : [
      {
        path: '/',
        element:  <Home />,
      },
      {
        path: '/about',
        element:  <About />,
      },
      {
        path: '/realisations',
        element:  <Realisations />,
      },
      {
        path: '/services',
        element:  <Services />,
      },
      {
        path: '/contact',
        element:  <Contact />,
      },
    ]
  }
])

export default function App() {
  return (
    <CustomTailwindClassNameProvider>
      <RouterProvider router={routes} />
    </CustomTailwindClassNameProvider>
  );
}

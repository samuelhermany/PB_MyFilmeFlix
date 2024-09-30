import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './App.module.css';

import { Home } from './pages/home';
import { Config } from './pages/config';
import { Details } from './pages/details';
import { MyList } from './pages/myList';
import { Watched } from './pages/watched';
import { NotFound } from './pages/not-found';

export default function App () {
    const router = createBrowserRouter(
    [
       {
           path: "/",
           element: <Home />,
       },
       {
           path: "/config/",
           element: <Config />,
       },
       {
           path: "/details/",
           element: <Details />,
       },
       {
           path: "/myList",
           element: <MyList />,
       },
       {
           path: "/watched",
           element: <Watched />,
       },
       {
           path: "*",
           element: <NotFound />,
       },
    ]);

   return (
       <RouterProvider router={router} />
   );
}
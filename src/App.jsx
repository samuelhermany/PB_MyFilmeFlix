// #region Imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './App.module.css';

import { Home } from './pages/home';
import { Details } from './pages/details';
import { MyList } from './pages/myList';
import { Watched } from './pages/watched';
import { EmCartaz } from './pages/emCartaz';
import { Assistidos } from './pages/assistidos';
import { MinhaLista } from './pages/minhaLista';
import { NotFound } from './pages/not-found';
// #endregion


export default function App () {
    const router = createBrowserRouter(
    [
       {
           path: "/",
           element: <Home />,
       },
       {
           path: "/details/:id",
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
        path: "/emCartaz",
        element: <EmCartaz />,
       },
       {
        path: "/assistidos",
        element: <Assistidos />,
       },
       {
        path: "/minhaLista",
        element: <MinhaLista />,
       },
       {
           path: "*",
           element: <NotFound />,
       },
    ],
    {
        basename: "/PB_MyFilmeFlix",  // Define o subdiretório como base
    });

   return (
       <RouterProvider router={router} />
   );
}
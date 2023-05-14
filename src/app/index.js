import React from "react";
import Home from "../screens/home";
import About from "../screens/about";
import ErrorPage from "../screens/errorPage";
import Events from "../screens/events";
import HousesOfPeace from "../screens/shepherds";
import Ministries from "../screens/ministries";
import Schedule from "../screens/schedule";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./index.styles";

import { ROTA } from "../variables";

const router = createBrowserRouter([
  {
    path: `${ROTA}`,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${ROTA}igreja`,
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${ROTA}eventos`,
    element: <Events />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${ROTA}pastores`,
    element: <HousesOfPeace />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${ROTA}ministerios`,
    element: <Ministries />,
    errorElement: <ErrorPage />,
  },
  {
    path: `${ROTA}programacao`,
    element: <Schedule />,
    errorElement: <ErrorPage />,
  },
]);

const AppContainer = () => {
  return (
    <App>
      <RouterProvider router={router} />
    </App>
  );
};

export default AppContainer;

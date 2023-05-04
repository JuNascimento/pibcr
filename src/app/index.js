import React from "react";
import Home from "../screens/home";
import About from "../screens/about";
import ErrorPage from "../screens/errorPage";
import Events from "../screens/events";
import HousesOfPeace from "../screens/housesOfPeace";
import Ministries from "../screens/ministries";
import Schedule from "../screens/schedule";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./index.styles";
// import ScrollToTop from "../helpers/scrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "igreja",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "eventos",
    element: <Events />,
    errorElement: <ErrorPage />,
  },
  {
    path: "casas-de-paz",
    element: <HousesOfPeace />,
    errorElement: <ErrorPage />,
  },
  {
    path: "ministerios",
    element: <Ministries />,
    errorElement: <ErrorPage />,
  },
  {
    path: "programacao",
    element: <Schedule />,
    errorElement: <ErrorPage />,
  },
]);

const AppContainer = () => {
  return (
    <App>
      {/* <ScrollRestoration /> */}
      <RouterProvider router={router} />
    </App>
  );
};

export default AppContainer;

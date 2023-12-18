import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "projects/*",
    element: <Projects />,
  },
  {
    path: "About",
    element: <About />,
  },
]);

const RootRoutes = () => {
  return <RouterProvider router={router} />;
};

export default RootRoutes;

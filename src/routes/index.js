import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Projects from "../pages/Projects";
import Connect from "../pages/Connect";
import About from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Blog/*",
    element: <Blog />,
  },
  {
    path: "projects/*",
    element: <Projects />,
  },
  {
    path: "Connect",
    element: <Connect />,
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

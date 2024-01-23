import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Header from "./Header";
import Home from "./Home";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Home />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

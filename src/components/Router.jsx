import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Home from "./Home";
import ShortUrlRedirect from "./ShortUrlRedirect";
import ViewClicks from "./ViewClicks";
import CustomUrl from "./CustomUrl";
import UnzipUrl from "./UnzipUrl";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/custom",
      element: (
        <>
          <CustomUrl />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/unzip",
      element: (
        <>
          <UnzipUrl />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/clicks/:key",
      element: (
        <>
          <ViewClicks />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/:key",
      element: (
        <>
          <ShortUrlRedirect />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

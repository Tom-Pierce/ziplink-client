import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import ShortUrlRedirect from "./ShortUrlRedirect";
import ViewClicks from "./ViewClicks";
import CustomUrl from "./CustomUrl";
import UnzipUrl from "./UnzipUrl";
import SignUp from "./SignUp";

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
      path: "/signup",
      element: (
        <>
          <SignUp />
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
      path: "/clicks/:paramKey",
      element: (
        <>
          <ViewClicks />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/clicks",
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

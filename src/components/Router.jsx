import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ErrorPage from "./ErrorPage";
import Header from "./Header";
import Home from "./Home";
import ShortUrlRedirect from "./ShortUrlRedirect";
import ViewClicks from "./ViewClicks";
import CustomUrl from "./CustomUrl";

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
    {
      path: "/custom",
      element: (
        <>
          <Header />
          <CustomUrl />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/clicks/:key",
      element: (
        <>
          <Header />
          <ViewClicks />
        </>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/:key",
      element: (
        <>
          <Header />
          <ShortUrlRedirect />
        </>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;

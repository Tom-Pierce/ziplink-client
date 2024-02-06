import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import CustomUrl from "./CustomUrl";
import UnzipUrl from "./UnzipUrl";
import ViewClicks from "./ViewClicks";
import ShortUrlRedirect from "./ShortUrlRedirect";
import Login from "./Login";
import ZipLinks from "./ZipLinks";
import ProtectedRoute from "./ProtectedRoute";

const routes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/custom"
        element={
          <ProtectedRoute redirectPath={"/login"}>
            <CustomUrl />
          </ProtectedRoute>
        }
      />
      <Route path="/unzip" element={<UnzipUrl />} />
      <Route
        path="/ziplinks"
        element={
          <ProtectedRoute redirectPath={"/login"}>
            <ZipLinks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clicks/:paramKey"
        element={
          <ProtectedRoute redirectPath={"/login"}>
            <ViewClicks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/clicks"
        element={
          <ProtectedRoute redirectPath={"/login"}>
            <ViewClicks />
          </ProtectedRoute>
        }
      />
      <Route path="/:key" element={<ShortUrlRedirect />} />
    </Routes>
  );
};

export default routes;

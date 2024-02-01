import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";
import CustomUrl from "./CustomUrl";
import UnzipUrl from "./UnzipUrl";
import ViewClicks from "./ViewClicks";
import ShortUrlRedirect from "./ShortUrlRedirect";
import Login from "./Login";

const routes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/custom" element={<CustomUrl />} />
      <Route path="/unzip" element={<UnzipUrl />} />
      <Route path="/clicks/:paramKey" element={<ViewClicks />} />
      <Route path="/clicks" element={<ViewClicks />} />
      <Route path="/:key" element={<ShortUrlRedirect />} />
    </Routes>
  );
};

export default routes;

import { Navigate } from "react-router-dom";
import { UserContext } from "../App";
import { useContext } from "react";
import PropTypes from "prop-types";

const ProtectedRoute = ({ children, redirectPath }) => {
  const { user } = useContext(UserContext);
  if (!user) return <Navigate to={redirectPath} replace />;
  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.element,
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;

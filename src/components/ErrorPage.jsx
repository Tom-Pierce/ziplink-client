import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-message">
      <h1>This page does not exist :(</h1>
      <Link to={"/"}>Home Page</Link>
    </div>
  );
};

export default ErrorPage;

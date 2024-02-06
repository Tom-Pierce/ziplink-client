import "./css/reset.css";
import "./css/index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useEffect, useState } from "react";
import Routes from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(undefined);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get("successfulLogin") === "true") setLoggedIn(true);
  }, []);

  // fetch user data
  useEffect(() => {
    const fetchData = async () => {
      console.log("logging in");
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_URL}api/auth/userInfo`,
          {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.status === 401) return;
        const json = await res.json();
        if (json.success) {
          setUser((user) => {
            const updatedUser = {
              username: json.user.username,
              pfp: json.user.pfp,
              zipLinks: json.user.ziplinks,
              email: json.user.email,
              ...user,
            };

            return updatedUser;
          });
        } else {
          // if request is not successful, remove user data
          setUser(undefined);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    if (loggedIn) fetchData();
  }, [loggedIn]);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <BrowserRouter>
          <Header />
          <Routes />
          <Footer />
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;

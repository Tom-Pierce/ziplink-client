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

  // fetch user data if logged in
  useEffect(() => {
    const fetchData = async () => {
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
        console.log("fethcing data");
        const json = await res.json();
        if (json.success) {
          setUser({ username: json.user.username });
        } else {
          // if request is not successful, remove user data
          setUser(undefined);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
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

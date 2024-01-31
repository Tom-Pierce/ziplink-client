const logout = () => {
  try {
    window.open("http://localhost:3000/api/auth/logout", "_self");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export default logout;

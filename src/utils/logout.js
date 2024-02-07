const logout = () => {
  try {
    window.open(`${import.meta.env.VITE_API_URL}/api/auth/logout`, "_self");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};

export default logout;

const fetchUserZipLinks = async () => {
  // fetch user ziplinks
  try {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}api/user/zipLinks`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 401) {
      return null;
    }
    const json = await res.json();
    return json.zipLinks;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export default fetchUserZipLinks;

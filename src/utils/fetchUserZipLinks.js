const fetchUserZipLinks = async (page, limit) => {
  // fetch user ziplinks
  try {
    const res = await fetch(
      `${
        import.meta.env.VITE_API_URL
      }api/user/zipLinks?page=${page}&limit=${limit}`,
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
    return { zipLinks: json.zipLinks, count: json.count };
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export default fetchUserZipLinks;

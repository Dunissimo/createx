const BASE_URL = "https://createx-backend.onrender.com";

class CreatexAPI {
  fetchData = async (url: string) => {
    const res = await fetch(`${BASE_URL}/${url}`);

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return await res.json();
  };
}

export default new CreatexAPI();

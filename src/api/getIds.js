import { URL, getToken } from "../utils/getToken";

const getIds = async (action, currentPage) => {
  const limit = 50;
  const offset = (currentPage - 1) * limit;

  try {
    const responseIds = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getToken(),
      },
      body: JSON.stringify({
        action: action,
        params: { offset: offset, limit: limit },
      }),
    });
    if (!responseIds.ok) {
      throw new Error(`Status ${responseIds.status}`);
    }

    const ids = (await responseIds.json()).result;
    console.log("ids", ids);
    const uniqueIds = [...new Set(ids)];

    return uniqueIds;
  } catch (error) {
    console.error("Fetch error", error.message);
    throw error;
  }
};
export default getIds;

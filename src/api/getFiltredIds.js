import { URL, getToken } from "../utils/getToken";

const getFilteredIds = async (params) => {
  try {
    const responseIds = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getToken(),
      },
      body: JSON.stringify({
        action: "filter",
        params: params,
      }),
    });

    if (!responseIds.ok) {
      throw new Error("Ids response was not ok");
    }

    const filteredIds = (await responseIds.json()).result;

    return filteredIds;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
};

export default getFilteredIds;

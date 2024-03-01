import getToken from "../utils/getToken";
import getUniqueDataById from "../utils/getUniqueDataById";

const url = "https://api.valantis.store:41000/";

const getFilteredIds = async (params) => {
  try {
    const responseIds = await fetch(url, {
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

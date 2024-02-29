import getToken from "../utils/token";

const url = "https://api.valantis.store:41000/";

const getItems = async (params) => {
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

    const ids = await responseIds.json();

    const responseItems = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getToken(),
      },
      body: JSON.stringify({
        action: "get_items",
        params: { ids: ids.result },
      }),
    });

    if (!responseItems.ok) {
      throw new Error("Items response was not ok");
    }
    const data = await responseItems.json();

    return data.result;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
};

export default getItems;

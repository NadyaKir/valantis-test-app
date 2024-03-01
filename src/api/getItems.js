import getToken from "../utils/getToken";
import getUniqueDataById from "../utils/getUniqueDataById";

const url = "https://api.valantis.store:41000/";

export default async function getItems(ids) {
  try {
    console.log('getitems IDS', ids)
    const responseItems = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getToken(),
      },
      body: JSON.stringify({
        action: "get_items",
        params: { ids: ids },
      }),
    });

    if (!responseItems.ok) {
      throw new Error("Items response was not ok");
    }
    const data = (await responseItems.json()).result;
    console.log('get items DATA', data)
    const uniqueData = getUniqueDataById(data);
    console.log("UniqData", uniqueData);
    return uniqueData;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
}

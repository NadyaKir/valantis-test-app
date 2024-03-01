import getToken from "../utils/getToken";

const url = "https://api.valantis.store:41000/";

const getField = async () => {
  try {
    const responseBrands = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth": getToken(),
      },
      body: JSON.stringify({
        action: "get_fields",
        params: { field: "brand" },
      }),
    });

    if (!responseBrands.ok) {
      throw new Error("Ids response was not ok");
    }

    const allFields = await responseBrands.json();
    const filtredFields = allFields.result.filter((field) => field !== null);
    const uniqueFields = [...new Set(filtredFields)];

    return uniqueFields;
  } catch (error) {
    console.error("Fetch error", error);
    throw error;
  }
};

export default getField;

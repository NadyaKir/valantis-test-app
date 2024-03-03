import { URL, getToken } from "../utils/getToken";

const getField = async () => {
  try {
    const responseBrands = await fetch(URL, {
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
      throw new Error(`Status ${responseBrands.status}`);
    }

    const allFields = await responseBrands.json();
    const filtredFields = allFields.result.filter((field) => field !== null);
    const uniqueFields = [...new Set(filtredFields)];

    return uniqueFields;
  } catch (error) {
    console.error("Fetch error", error.message);
    throw error;
  }
};

export default getField;

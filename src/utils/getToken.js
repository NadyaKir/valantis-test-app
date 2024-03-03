import md5 from "md5";

export const URL = "https://api.valantis.store:41000/";

export function getToken() {
  const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  const token = md5(`Valantis_${currentDate}`);

  return token;
}

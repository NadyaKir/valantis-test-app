import { useState, useEffect } from "react";

import getField from "../api/getField";

export default function Filter() {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    async function updateState() {
      const fields = await getField();
      setFields(fields);
    }

    updateState();
  }, []);

  return (
    <form>
      <label htmlFor="brands">Brand:</label>
      <select id="brands" name="brands">
        {fields.map((field) => (
          <option value={field}>{field}</option>
        ))}
      </select>
    </form>
  );
}

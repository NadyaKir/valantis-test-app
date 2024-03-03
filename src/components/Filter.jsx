import { useState, useEffect } from "react";

import getField from "../api/getField";

export default function Filter({ onChange }) {
  const [fields, setFields] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("Select brand");

  useEffect(() => {
    async function updateState() {
      const fields = await getField();
      setFields(fields);
    }

    updateState();
  }, []);

  const handleSelectChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    onChange("filter", { brand });
  };

  return (
    <form>
      <label htmlFor="brands">Brand:</label>
      <select
        className=""
        id="brands"
        name="brands"
        value={selectedBrand}
        onChange={handleSelectChange}
      >
        <option value="">Select Brand</option>
        {fields.map((field, index) => (
          <option key={index} value={field}>
            {field}
          </option>
        ))}
      </select>
    </form>
  );
}

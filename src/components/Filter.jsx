import { useState, useEffect } from "react";

import getField from "../api/getField";

export default function Filter({ params, setAction, setParams }) {
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
    const brand = event.target.value
    setSelectedBrand(brand);
    setAction("filter");
    setParams({ brand: brand });
  };

  return (
    <form>
      <label htmlFor="brands">Brand:</label>
      <select
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

import { useState, useEffect } from "react";

import getField from "../api/getField";

export default function Filter({ onChange }) {
  const [fields, setFields] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("Выберите бренд");

  useEffect(() => {
    async function updateState() {
      const fields = await getField();
      console.log('fields',fields)
      setFields(fields.sort());
    }

    updateState();
  }, []);

  const handleSelectChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    onChange("filter", { brand });
  };

  const handleResetButtonClick = () => {
    onChange("get_ids", { brand: "Select brand" });
    setSelectedBrand("Select brand");
  };

  return (
    <div className="flex flex-row ">
      <form className="mr-2">
        <label className="mr-2" htmlFor="brands">
          Бренд:
        </label>
        <select
          id="brands"
          name="brands"
          value={selectedBrand}
          onChange={handleSelectChange}
        >
          <option value="" selected>
            Выберите бренд
          </option>
          {fields.map((field, index) => (
            <option key={index} value={field}>
              {field}
            </option>
          ))}
        </select>
      </form>
      <button onClick={handleResetButtonClick}>Сбросить фильтр</button>
    </div>
  );
}

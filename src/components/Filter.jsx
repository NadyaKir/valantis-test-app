import { useState, useEffect } from "react";
import debounce from "lodash.debounce";

import getField from "../api/getField";

export default function Filter({ onChange }) {
  const [fields, setFields] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("Выберите бренд");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function updateState() {
      const brandFields = await getField("brand");
      setFields(brandFields.sort());
    }

    updateState();
  }, []);

  const handleSelectChange = (event) => {
    const brand = event.target.value;
    setSelectedBrand(brand);
    onChange("filter", { brand });
    setSearchTerm("");
  };

  const handleResetButtonClick = () => {
    onChange("get_ids");
    setSelectedBrand("Выберите бренд");
  };

  const debouncedSearch = debounce((searchTerm) => {
    searchTerm.length > 0
      ? onChange("filter", { product: searchTerm })
      : onChange("get_ids", {});
  }, 500);

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    debouncedSearch(term);
    setSelectedBrand("Выберите бренд");
  };

  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
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
      <div>
        <input
          className="w-60"
          type="search"
          placeholder="Поиск..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

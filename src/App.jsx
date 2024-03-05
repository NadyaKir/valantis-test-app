import { useEffect, useState } from "react";

import getItems from "./api/getItems";
import getFilteredIds from "./api/getFiltredIds";
import getIds from "./api/getIds";

import Table from "./components/Table";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";

import formatData from "./utils/formatData";

function App() {
  const [data, setData] = useState([]);
  const [action, setAction] = useState("get_ids");
  const [params, setParams] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  console.log("action", action);
  console.log("params", params);

  console.log("data: ", data);
  useEffect(() => {
    async function updateState() {
      try {
        if (action === "filter") {
          const filteredIds = await getFilteredIds(params);
          console.log("filteredIDS", filteredIds);
          const data = await getItems(filteredIds);
          const formattedData = formatData(data);
          setData(formattedData);
          setIsLoading(false);
        } else {
          const itemsIds = await getIds(action, currentPage);
          console.log("Itemdsids", itemsIds);
          const data = await getItems(itemsIds);
          const formattedData = formatData(data);
          setData(formattedData);
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error initialization items", error);
        if (error.message === "Status 500" || error.message === "Status 400") {
          console.log("Retrying request...");
          return updateState();
        }
        throw error;
      }
    }

    updateState();
  }, [action, params, currentPage, isLoading]);

  const handlePrevPage = () => {
    setIsLoading(true);
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    setIsLoading(true);
    setCurrentPage((prev) => prev + 1);
  };

  const handleFilterChange = (action, params) => {
    setAction(action);
    setParams(params);
    setCurrentPage(1);
    setIsLoading(true);
  };

  return (
    <div className="h-screen w-4/5 mx-auto gap-y-5 flex flex-col py-5">
      <Filter onChange={handleFilterChange} params={params} />
      <Table items={data} isLoading={isLoading} />
      <Pagination
        disabled={action === "filter"}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
      />
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

import getItems from "./api/getItems";
import getFilteredIds from "./api/getFiltredIds";
import getIds from "./api/getIds";

import Table from "./components/Table";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";

function App() {
  const [data, setData] = useState([]);
  const [action, setAction] = useState("get_ids");
  const [params, setParams] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  console.log(action);
  console.log(params);

  useEffect(() => {
    async function updateState() {
      try {
        if (action === "filter") {
          const filteredIds = await getFilteredIds(params);
          console.log("filteredIDS", filteredIds);
          const data = await getItems(filteredIds);
          setData(data);
        } else {
          const itemsIds = await getIds(action, currentPage);
          console.log("Itemdsids", itemsIds);
          const data = await getItems(itemsIds);
          setData(data);
        }
      } catch (error) {
        console.error("Error initialization items", error);
        if (error.id) {
          console.log("Retrying request...");
          return updateState();
        }
        throw error;
      }
    }

    updateState();
  }, [action, params, currentPage]);

  // console.log(data);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const handleFilterChange = (action, params) => {
    setAction(action);
    setParams(params);
    setCurrentPage(1);
  };

  const loading = <p>Loading...</p>;
  return (
    <div className="h-screen w-4/5 mx-auto gap-y-5 flex flex-col py-5">
      <Filter onChange={handleFilterChange} params={params} />
      {data.length !== 0 ? <Table items={data} /> : loading}
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

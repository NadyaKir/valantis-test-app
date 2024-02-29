import { useEffect, useState } from "react";
import getItems from "../api/getItems";

export default function Component() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function updateState() {
      const data = await getItems({limit: 50});
      setData(data);
    }

    updateState();
  }, []);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.brand}</th>
              <th>{item.product}</th>
              <th>{item.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

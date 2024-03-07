import SyncLoader from "react-spinners/SyncLoader";

export default function Table({ items, isLoading }) {
  const products = items.map((item) => (
    <tr key={item.id}>
      <td className="p-2 text-center whitespace-nowrap">{item.id}</td>
      <td className="p-2 text-left whitespace-nowrap">{item.product}</td>
      <td className="p-2 whitespace-nowrap">
        <div className="text-center font-bold">{item.price}</div>
      </td>
      <td className="p-2 text-center whitespace-nowrap">{item.brand}</td>
    </tr>
  ));

  const spinner = (
    <tr>
      <td className="h-screen text-center" colSpan={4}>
        <SyncLoader
          color="rgba(142, 142, 142, 1)"
          size={9}
          margin={3}
          cssOverride={{ display: "block" }}
        />
      </td>
    </tr>
  );

  const noDataMessage = (
    <tr className="h-screen text-center">
      <td className="text-center" colSpan={4}>
        <p>Нет данных :(</p>
      </td>
    </tr>
  );

  return (
    <div className="w-full h-full max-w-6xl overflow-y-auto mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800 ">Товары</h2>
      </header>
      <div className="p-3">
        <table className="table-auto w-full">
          <thead className="text-xs text-center font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-3 whitespace-nowrap">ID</th>
              <th className="p-3 whitespace-nowrap">Продукт</th>
              <th className="p-3 whitespace-nowrap">Цена</th>
              <th className="p-3 whitespace-nowrap">Бренд</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {!isLoading
              ? items.length > 0
                ? products
                : noDataMessage
              : spinner}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function Table({ items }) {
  return (
    <div className="w-full max-w-6xl overflow-y-auto mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="font-semibold text-gray-800 ">Товары</h2>
      </header>
      <div className="p-3 overflow-y-scroll">
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
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="p-2 text-center whitespace-nowrap">
                    {item.id}
                  </td>
                  <td className="p-2 text-left whitespace-nowrap">
                    {item.product}
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-center font-bold">
                      {item.price}
                    </div>
                  </td>
                  <td className="p-2 text-center whitespace-nowrap">
                    {item.brand}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

  );
}

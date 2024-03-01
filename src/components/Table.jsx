export default function Table({ items }) {

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Цена</th>
            <th>Бренд</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <th>{item.product}</th>
              <th>{item.price}</th>
              <th>{item.brand}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

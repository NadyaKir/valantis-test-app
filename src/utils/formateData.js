export default function formatData(data) {
  const formattedData = data.map((item) => {
    return {
      ...item,
      price: item.price.toLocaleString("ru-RU", {
        style: "currency",
        currency: "RUB",
      }),
    };
  });
  
  return formattedData;
}

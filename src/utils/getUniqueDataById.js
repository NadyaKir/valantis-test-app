export default function getUniqueDataById(data) {
    const uniqueData = [];
    const arrayOfIds = [];

    for (let i = 0; i < data.length; i++) {
      if (!arrayOfIds.includes(data[i].id)) {
        arrayOfIds.push(data[i].id);
        uniqueData.push(data[i]);
      }
    }

    return uniqueData;
}
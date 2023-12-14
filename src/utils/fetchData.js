import axios from "axios";

export const fetchData = async (cat, id, ida) => {
  try {
    let url = `http://laweb_api.test/api/${cat}`;
    if (id) {
      url += `/${id}`;
      // console.log(url);

      if (ida) {
        url += `?ida=${ida}`;
        // console.log(url);
      }
    }
    // console.log(url);
    const { data } = await axios.get(url).then(({ data }) => data);
    console.log(data);
    if (id) {
      const idData = [];
      idData.push(data);
      // console.log(idData);
      return idData;
    } else {
      // console.log(data);
      return data;
    }
  } catch (error) {
    return `Error: ${error}`;
  }
};

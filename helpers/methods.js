import axios from "axios";
export const getData = async (url, update) => {
  try {
    const { data } = await axios.get(url);

    update(data);
  } catch (err) {
    console.error(err);
  }
};

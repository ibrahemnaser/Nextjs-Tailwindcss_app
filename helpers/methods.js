import axios from "axios";
export const getData = async (url, update, controllerSignal) => {
  try {
    const { data } = await axios.get(url, { signal: controllerSignal });

    update(data);
  } catch (err) {
    if (err.name !== "CanceledError") {
      console.error(err);
    }
  }
};

import axios from "axios";

const RANDOM_IMG_URL = "https://picsum.photos/200/300";

export const fetchImage = async (params) => {
  try {
    const response = await axios.get(RANDOM_IMG_URL);
    console.log(JSON.stringify(response));
    return response;
  } catch (error) {
    return error.response;
  }
};

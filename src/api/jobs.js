import axios from "axios";
const baseURL = import.meta.env.VITE_APP_BASE_URL;
export const getJobs = async () => {
  try {
    let config = {
      method: "get",
      url: `${baseURL}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

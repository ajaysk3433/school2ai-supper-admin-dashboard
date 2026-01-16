import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER;

export const createSchool = async (obj) => {
  try {
    const response = await axios.post(
      `http://localhost:3000/school/create`,
      obj
    );

    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

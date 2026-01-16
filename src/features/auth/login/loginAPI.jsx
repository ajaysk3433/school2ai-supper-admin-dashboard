import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER;

export const loginRequest = async (Credentials) => {
  try {
    const response = await axios.post(`${SERVER}/auth/login`, Credentials);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

const SERVER = import.meta.env.VITE_SERVER;

export const loginRequest = async (Credentials) => {
  try {
    const response = await axios.post(`${SERVER}/auth/login`, Credentials);

    console.log("Response data:", response.data);
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

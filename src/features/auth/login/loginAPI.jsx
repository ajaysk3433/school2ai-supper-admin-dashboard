import axios from "axios";

export const loginRequest = async (Credentials) => {
  try {
    const response = await axios.post("/api/auth/login", Credentials, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
  }
};

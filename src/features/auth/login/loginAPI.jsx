import axios from "axios";

export const loginRequest = async (Credentials) => {
  const response = await axios.post("/api/auth/login", Credentials, {
    withCredentials: true,
  });
  return response.data;
};

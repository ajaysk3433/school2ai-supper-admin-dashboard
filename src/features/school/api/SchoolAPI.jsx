import axios from "axios";
export const getSchool = async () => {
  const response = await axios.get(
    "http://localhost:3000/school/all-school-details"
  );
  return response.data;
};

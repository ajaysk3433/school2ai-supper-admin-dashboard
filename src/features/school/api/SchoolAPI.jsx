import axios from "axios";

const SERVER = import.meta.env.VITE_SERVER;
console.log("server", SERVER);
export const getSchool = async () => {
  const response = await axios.get(
    "http://localhost:3000/school/all-school-details",
  );
  return response.data;
};

export const getSchoolById = async (id) => {
  const response = await axios.get(`http://localhost:3000/school/view/${id}`);

  return response.data[0];
};

export const getFeaturesById = async (id) => {
  const response = await axios.get(`http://localhost:3000/features/view/${id}`);

  return response.data;
};

export const updateSchoolField = async (id, obj) => {
  const response = await axios.patch(
    `http://localhost:3000/school/update/${id}`,
    obj,
  );

  console.log(response.data);

  return response.data;
};

export const toggleFeature = async (obj) => {
  const response = await axios.post(
    `http://localhost:3000/features/toggle`,
    obj,
  );

  console.log(response.data);

  return response.data;
};

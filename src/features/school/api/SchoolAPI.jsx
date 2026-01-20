import axios from "axios";

export const getSchool = async () => {
  const response = await axios.get("/api/school/all-school-details", {
    withCredentials: true,
  });
  return response.data;
};

export const getSchoolById = async (id) => {
  const response = await axios.get(`/api/school/view/${id}`, {
    withCredentials: true,
  });

  return response.data[0];
};

export const getFeaturesById = async (id) => {
  const response = await axios.get(`/api/features/view/${id}`, {
    withCredentials: true,
  });

  return response.data;
};

export const updateSchoolField = async (id, obj) => {
  const response = await axios.patch(`/api/school/update/${id}`, obj, {
    withCredentials: true,
  });

  console.log(response.data);

  return response.data;
};

export const toggleFeature = async (obj) => {
  const response = await axios.post(`/api/features/toggle`, obj, {
    withCredentials: true,
  });

  console.log(response.data);

  return response.data;
};

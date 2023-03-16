import axios from "axios";
const queryKey = "faculties";

export const GetFaculties = () => {
  return axios.get("/faculte").then((res) => res.data);
};

export const CreateFaculty = (values: any) => {
  return axios.post("/faculte", values).then((res) => res.data);
};

export const DeleteFaculty = (values: any) => {
  return axios.delete(`/faculte/${values.id}`).then((res) => res.data);
};

export const GetFaculty = (id: any) => {
  return axios.get(`/faculte/${id}`).then((res) => res.data);
};

// updata faculty
export const UpdateFaculty = (values: any, id: number) => {
  return axios.patch(`/faculte/${id}`, values).then((res) => res.data);
};

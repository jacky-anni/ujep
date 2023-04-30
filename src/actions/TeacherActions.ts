import axios from "axios";

// course Liste
export const TeacherList = (page: number = 1) => {
  return axios.get(`/teachers?page=1`).then((res) => res.data);
};

// create course
export const AddTeacher = (data: any) => {
  return axios.post(`/teachers`, data).then((res) => res.data);
};
// edit course
export const EditTeacher = (data: any, id: string) => {
  return axios.patch(`/teachers/${id}`, data).then((res) => res.data);
};

// create course
export const GetTeacher = (id: any) => {
  return axios.get(`/teachers/${id}`).then((res) => res.data);
};

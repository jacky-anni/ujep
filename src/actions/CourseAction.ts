import axios from "axios";

export const ListCourse = (page: number = 1) => {
  return axios.get(`/course?page=${page}`).then((res) => res.data);
};

// withou pagination
export const ListCourseWithoutPagination = () => {
  return axios.get(`/course/filter/all`).then((res) => res.data);
};

// create course
export const AddCourse = (data: any) => {
  return axios.post(`/course`, data).then((res) => res.data);
};

// show course course
export const GetCourse = (id: any) => {
  return axios.get(`/course/${parseInt(id)}`).then((res) => res.data);
};

// create course
export const EditCourse = (data: any, id: string) => {
  return axios.patch(`/course/${id}`, data).then((res) => res.data);
};

import axios from "axios";

// showl all Studentss
export const AddRegister = (student: number, faculty: number, data: any) => {
  return axios
    .post(`/immatriculation/${student}/${faculty}`, data)
    .then((res) => res.data);
};

export const EditRegislation = (id: number, data: any) => {
  return axios.patch(`/immatriculation/${id}`, data).then((res) => res.data);
};

export const GetRegislation = (student: number) => {
  return axios.get(`/immatriculation/${student}`).then((res) => res.data);
};

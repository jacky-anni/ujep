import axios from "axios";

// interface dat
interface Employee {
  nom: string;
  prenom: string;
  sexe: string;
  email: string;
  telephone: string;
  date_naissance: string;
  fonction: string;
  date_embauche: string;
  salaire: string;
}

// showl all employees
export const GetEmployees = (page: number = 1) => {
  return axios.get(`/employees?page=${page}`).then((res) => res.data);
};

// add employee
export const addEmployee = async (data: Employee) => {
  return axios.post("employees", data).then((res) => res.data);
};

// add employee
export const editEmployee = async (id: string, data: Employee) => {
  return axios.patch(`/employees/${id}`, data).then((res) => res.data);
};

// get employee
export const showEmployee = async (id: any) => {
  return axios.get(`/employees/${id}`).then((res) => res.data);
};

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
export const GetEmployees = async (page: number = 1) => {
  try {
    const { data } = await axios.get(`/employees?page=${page}`);
    return data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Erruer de connexion",
    };
  }
};

// add employee
export const addEmployee = async (data: Employee) => {
  try {
    const res = await axios.post(`/employees`, data);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Erruer de connexion",
    };
  }
};

// add employee
export const editEmployee = async (id: string, data: Employee) => {
  try {
    const res = await axios.patch(`/employees/${id}`, data);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: error.response.data.message,
    };
  }
};

// get employee
export const showEmployee = async (id: any) => {
  try {
    const res = await axios.get(`/employees/${id}`);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Cet employee n'existe pas",
    };
  }
};

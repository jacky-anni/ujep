import axios from "axios";

// interface dat
interface Students {
  nom: string;
  prenom: string;
  sexe: string;
  email: string;
  telephone: string;
  date_naissance: string;
  lieu_naissance: string;
  groupe_sanguin: string;
  statut_matrimonial: string;
  cin: string;
  nif: string;
}

// interface dat
interface StudentsSupp {
  ocupation: string;
  personne_resp: string;
  telephone_resp: string;
  maladie: string;
  personne_contact: string;
  annee_fin_etude: string;
  nom_etablissemet: string;
  etude_precedente: string;
  option_precendente: string;
  annee_etude_precedente: string;
}

// showl all Studentss
export const GetStudents = (page: number = 1) => {
  return axios.get(`/students?page=${page}`).then((res) => res.data);
};

// get students all
export const GetStudentsAll = () => {
  return axios.get(`/students/filter/all`).then((res) => res.data);
};

// add Students
export const AddStudents = (data: any) => {
  return axios.post(`/students`, data).then((res) => res.data);
};

// add info supp.
export const AddStudentsSupp = (data: StudentsSupp, student: any) => {
  return axios.post(`/student/infos/${student}`, data).then((res) => res.data);
};

// edit Students information supp.
export const EditStudentsSupp = (data: StudentsSupp, id: string) => {
  return axios.patch(`/student/infos/${id}`, data).then((res) => res.data);
};

// edit Students
export const EditStudents = (id: string, data: any) => {
  return axios.patch(`/students/${id}`, data).then((res) => res.data);
};

// get Students
export const ShowStudents = (id: any) => {
  return axios.get(`/students/${id}`).then((res) => res.data);
};

export const ShowStudentsSupp = async (id: number) => {
  return axios.get(`/students/infos/${id}`).then((res) => res.data);
};

//search
export const seachStudent = (value: string) => {
  return axios.get(`students/search/${value}`).then((res) => res.data);
};

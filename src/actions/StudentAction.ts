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

// add Students
export const addStudents = (data: any) => {
  return axios.post(`/students`, data).then((res) => res.data);
};

// add info supp.
export const addStudentsSupp = (data: StudentsSupp, student: any) => {
  return axios.post(`/student/infos/${student}`, data).then((res) => res.data);
};

// edit Students
export const editStudents = (id: string, data: Students) => {
  return axios.patch(`/Students/${id}`, data).then((res) => res.data);
};

// edit Students information supp.
export const editStudentsSupp = (data: StudentsSupp, id: string) => {
  return axios.patch(`/Student/infos/${id}`, data).then((res) => res.data);
};

// get Students
export const showStudents = (id: any) => {
  return axios.get(`/students/${id}`).then((res) => res.data);
};

export const showStudentsSupp = async (id: number) => {
  return axios.get(`/student/infos/${id}`).then((res) => res.data);
};

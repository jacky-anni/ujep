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
export const GetStudents = async (page: number = 1) => {
  try {
    const { data } = await axios.get(`/students?page=${page}`);
    return data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Erruer de connexion",
    };
  }
};

// add Students
export const addStudents = async (data: Students) => {
  try {
    const res = await axios.post(`/students`, data);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: error.response.data.message,
    };
  }
};

// add info supp.
export const addStudentsSupp = async (data: StudentsSupp, student: any) => {
  try {
    const res = await axios.post(`/student/infos/${student}`, data);
    return res.data;
  } catch (error: any) {
    console.log(error);
    return {
      status: 404,
      message: "Erruer de connexion",
    };
  }
};

// edit Students
export const editStudents = async (id: string, data: Students) => {
  try {
    const res = await axios.patch(`/Students/${id}`, data);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: error.response.data.message,
    };
  }
};

// edit Students information supp.
export const editStudentsSupp = async (data: StudentsSupp, id: string) => {
  try {
    const res = await axios.patch(`/Student/infos/${id}`, data);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: error.response.data.message,
    };
  }
};

// get Students
export const showStudents = async (id: any) => {
  try {
    const res = await axios.get(`/students/${id}`);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Cet etudiant n'existe pas",
    };
  }
};

export const showStudentsSupp = async (id: number) => {
  try {
    const res = await axios.get(`/student/infos/${id}`);
    return res.data;
  } catch (error: any) {
    return {
      status: 404,
      message: "Cet etudiant n'existe pas",
    };
  }
};

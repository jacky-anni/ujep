import * as yup from "yup";
export const CreateCourse = yup.object().shape({
  //code_cours: yup.string().required("Ce champ est obligatoire !"),
  nom_cours: yup.string().required("Ce champ est obligatoire !"),
  description: yup.string().required("Ce champ est obligatoire !"),
});

import * as yup from "yup";
export const CreateCatalogShema = yup.object().shape({
  //code_cours: yup.string().required("Ce champ est obligatoire !"),
  semestre: yup.string().required("Ce champ est obligatoire !"),
  annee_academique: yup.string().required("Ce champ est obligatoire !"),
});

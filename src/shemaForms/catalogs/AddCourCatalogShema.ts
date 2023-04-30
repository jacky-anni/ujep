import * as yup from "yup";
export const AddCourCatalogShema = yup.object().shape({
  //code_cours: yup.string().required("Ce champ est obligatoire !"),
  teacher: yup.string().required("Ce champ est obligatoire !"),
  matiere_base: yup.string().required("Ce champ est obligatoire !"),
  note_passage: yup
    .number()
    .typeError("vous devez spécifier un nombre")
    .min(50, "Valeur minimale 50")
    .max(100, "Valeur maximale 100")
    .required("Ce champ est obligatoire !"),
});

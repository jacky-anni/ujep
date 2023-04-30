import * as yup from "yup";
// set the current date andconst maxDate = new Date();
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

export const CreateTeacherShema = yup.object().shape({
  //code_cours: yup.string().required("Ce champ est obligatoire !"),
  nom: yup.string().required("Ce champ est obligatoire !"),
  prenom: yup.string().required("Ce champ est obligatoire !"),
  sexe: yup.string().required("Ce champ est obligatoire !"),
  email: yup
    .string()
    .email("L'email est invalide")
    .required("Ce champ est obligatoire !"),
  telephone: yup.string().required("Ce champ est obligatoire !"),
  date_naissance: yup
    .date()
    .typeError("Cette date est invalide")
    .required("Cette date n'est pas valide!")
    .max(maxDate, "Vous devez avoir au moins 18 ans"),
  niveau: yup.string().required("Ce champ est obligatoire !"),
});

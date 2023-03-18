// shema validation
import * as yup from "yup";
// set the current date andconst maxDate = new Date();
const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18);

const CreateAndEditShemaStudents = yup.object().shape({
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
  lieu_naissance: yup.string().required("Ce champ est obligatoire !"),
  groupe_sanguin: yup.string().required("Ce champ est obligatoire !"),
  statut_matrimonial: yup.string().required("Ce champ est obligatoire !"),
  nif: yup.string().required("Ce champ est obligatoire !"),
});

export default CreateAndEditShemaStudents;

import * as yup from "yup";
const AddEditEmplyeesSchema = yup.object().shape({
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
    .required("Cette date n'est pas valide!")
    .typeError("Cette date n'est pas valide"),
  fonction: yup.string().required("Ce champ est obligatoire !"),
  date_embauche: yup
    .date()
    .required("Cette date n'est pas valide !")
    .typeError("Cette date n'est pas valide"),
  salaire: yup
    .number()
    .min(0, "La note ne doit pas être inferieur à 0")
    .typeError("vous devez spécifier un nombre"),
});

export default AddEditEmplyeesSchema;

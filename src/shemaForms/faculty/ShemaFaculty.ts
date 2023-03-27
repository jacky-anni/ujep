import * as yup from "yup";

const ShemaFaculty = yup.object().shape({
  nom_faculte: yup.string().required("Ce champ est obligatoire !"),
  degree: yup.string().required("Ce champ est obligatoire !"),
  duree: yup
    .number()
    .typeError("vous devez spécifier un nombre")
    .min(1, "Valeur minimale 1")
    .max(7, "Valeur maximale 7")
    .required("Ce champ est obligatoire !"),

  note_de_passage: yup
    .number()
    .typeError("vous devez spécifier un nombre")
    .min(60, "Valeur minimale 60")
    .max(100, "Valeur maximale 100")
    .required("Ce champ est obligatoire !"),
  nombre_matiere: yup
    .number()
    .typeError("vous devez spécifier un nombre")
    .min(1, "Valeur minimale 1")
    .required("Ce champ est obligatoire !"),
  description: yup
    .string()
    .required("Ce champ est obligatoire !")
    .max(250, "Valeur maximale 100"),
});

export default ShemaFaculty;

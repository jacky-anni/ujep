import * as yup from "yup";
const CreateAndEditInfoSuppShema = yup.object().shape({
  ocupation: yup.string().required("Ce champ est obligatoire !"),
  personne_resp: yup.string().required("Ce champ est obligatoire !"),
  telephone_resp: yup.string().required("Ce champ est obligatoire !"),
  personne_contact: yup.string().required("Ce champ est obligatoire !"),
  annee_fin_etude: yup
    .number()
    .typeError("vous devez spécifier un nombre")
    .required("Ce champ est obligatoire !"),
  // .matches(/^\d{4}$/, "Le numéro doit être composé de 4 chiffres"),
  maladie_check: yup.string().nullable().required("Ce champ est obligatoire !"),
  etablissement_check: yup
    .string()
    .nullable()
    .required("Ce champ est obligatoire !"),
});

export default CreateAndEditInfoSuppShema;

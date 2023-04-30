import * as yup from "yup";
const CreateRegistration = yup.object().shape({
  vacation: yup.string().required("Ce champ est obligatoire !"),
  niveau: yup.string().required("Ce champ est obligatoire !"),
  annee: yup.string().required("Ce champ est obligatoire !"),
  degree: yup.string().required("Ce champ est obligatoire !"),
});

export default CreateRegistration;

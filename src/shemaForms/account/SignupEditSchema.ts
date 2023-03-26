import * as yup from "yup";
// shema validation
const SignupEditSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'email est invalide")
    .required("Ce champ est obligatoire !"),
  username: yup.string().required("Ce champ est obligatoire !"),
  role_name: yup.string().required("Ce champ est obligatoire !"),
});

export default SignupEditSchema;

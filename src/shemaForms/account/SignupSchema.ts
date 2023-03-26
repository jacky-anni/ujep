import * as yup from "yup";
// shema validation
const SignupSchema = yup.object().shape({
  email: yup
    .string()
    .email("L'email est invalide")
    .required("Ce champ est obligatoire !"),
  username: yup.string().required("Ce champ est obligatoire !"),
  role_name: yup.string().required("Ce champ est obligatoire !"),
  password: yup
    .string()
    .required("Ce champ est obligatoire !")
    .matches(
      /^(?=.{8,})/,
      "Le mot de passe doit contenir au moins 8 caractères"
    ),
  password_confirm: yup
    .string()
    .required("Ce champ est obligatoire !")
    .oneOf(
      [yup.ref("password"), null],
      "Les mots de passe ne sont pas iddentiques"
    ),
});

export default SignupSchema;

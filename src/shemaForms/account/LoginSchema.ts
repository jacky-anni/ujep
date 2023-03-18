import * as yup from "yup";
const LoginSchema = yup.object().shape({
  //chek username
  username: yup.string().required("Ce champ est obligatoire !"),
  // check password
  password: yup.string().required("Ce champ est obligatoire !"),
});

export default LoginSchema;

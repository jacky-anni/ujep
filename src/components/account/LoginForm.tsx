import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { loginUser } from "../../redux/UserSlice";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { login } from "../../actions/UserAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { Alert } from "@mui/material";

const LoginForm = () => {
  // is loding for submitinfo
  const [loading, setLoading] = useState(false);
  // errors satae
  const [errorsState, setErrorsState] = useState(null);
  // dispatch login
  const dispatch = useAppDispatch();
  // navigate fonction for redirect
  const navigate = useNavigate();

  // shema validation for login login user
  const LoginSchema = Yup.object().shape({
    //chek username
    username: Yup.string().required("Ce champ est obligatoire !"),
    // check password
    password: Yup.string().required("Ce champ est obligatoire !"),
  });

  const form = (
    <Formik
      // initial value for login
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { resetForm }) => {
        setLoading(true);
        const data = await login(values);

        if (data && data.status === 404) {
          // if error show it
          setErrorsState(data.message);
          // reset data form
          resetForm();
          // desactive login loading
          setLoading(false);
        } else {
          // desactive login loading
          setLoading(false);
          // dispatch logn state
          dispatch(loginUser(data));

          return navigate("/dashbord");
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          {errorsState && (
            <div className='row mb-3 bold '>
              <Alert variant='filled' severity='error'>
                {errorsState}
              </Alert>
            </div>
          )}

          <div className='row'>
            <div className='col-md-12 position-relative mb-2'>
              <label>Nom d'utilisateur</label>
              <Field
                className='form-control '
                name='username'
                placeholder='@jacky'
              />

              <span className='errors-field'>
                {errors.username ? <>{errors.username}</> : null}
              </span>
            </div>

            <div className='col-md-12 position-relative mb-2'>
              <label>Mot de passe</label>
              <Field
                type='password'
                className='form-control '
                name='password'
                placeholder='Votre mot de passe'
              />

              <span className='errors-field'>
                {errors.password ? <>{errors.password}</> : null}
              </span>
            </div>
          </div>

          <div className='text-center d-grid'>
            <SubmitButtom message={"Soumettre"} loading={loading} />
          </div>
        </Form>
      )}
    </Formik>
  );
  return <>{form}</>;
};

export default LoginForm;

import React, { useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { toast, ToastContainer } from "react-toastify";
import { Divider } from "antd";
import { addUser } from "../../redux/actions/UserAction";
import { Alert } from "@mui/material";
import { addUsers } from "../../redux/UserSlice";
import { useAppDispatch } from "./../../redux/hooks/hooks";
import { Toast } from "../layout/Toast";

export const AddUsers = () => {
  // set open
  const [open, setOpen] = useState(false);
  // set loading
  const [loading, setLoading] = useState(false);
  // set errors
  const [errorsState, setErrorsState] = useState(null);
  // use app dispatch
  const dispatch = useAppDispatch();

  // shema validation
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("L'email est invalide")
      .required("Ce champ est obligatoire !"),
    username: Yup.string().required("Ce champ est obligatoire !"),
    role_name: Yup.string().required("Ce champ est obligatoire !"),
    password: Yup.string()
      .required("Ce champ est obligatoire !")
      .matches(
        /^(?=.{8,})/,
        "Le mot de passe doit contenir au moins 8 caractères"
      ),
    password_confirm: Yup.string()
      .required("Ce champ est obligatoire !")
      .oneOf(
        [Yup.ref("password"), null],
        "Les mots de passe ne sont pas iddentiques"
      ),
  });

  // Form html
  const form = (
    <Formik
      initialValues={{
        email: "",
        username: "",
        role_name: "",
        password: "",
        password_confirm: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert employee
        const data = await addUser({
          email: values.email,
          username: values.username,
          role_name: values.role_name,
          password: values.password,
        });
        // if errors

        if (data.status) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          console.log(data);

          // update states
          dispatch(addUsers(data));
          // set loading is false
          setLoading(false);
          // off the modal
          setOpen(false);
          // if success message to user
          Toast("success", "utilisateur ajouté avec succè");

          // reset data form to empty
          resetForm();
          // reset the message errors to null
          setErrorsState(null);
          // redirect for 2 etatp
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Divider />
          <div className='row'>
            {errorsState && (
              <p>
                <Alert variant='filled' severity='error'>
                  {errorsState}
                </Alert>
              </p>
            )}
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer l'email</label>
              <Field
                className='form-control '
                name='email'
                placeholder='contact@ujep.edu.ht'
              />

              <span className='errors-field'>
                {errors.email ? <>{errors.email}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le nom d'utilisateur</label>
              <Field
                className='form-control '
                name='username'
                placeholder='@jacky'
              />

              <span className='errors-field'>
                {errors.username ? <>{errors.username}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12 position-relative mb-2'>
              <label>Choisir un role</label>
              <Field className='form-control' as='select' name='role_name'>
                <option value=''>Choisir une option</option>
                <option value={"Utilisateur"}>Utilisateur</option>
                <option value={"Administrateur"}>Administrateur</option>
              </Field>

              <span className='errors-field'>
                {errors.role_name ? <>{errors.role_name}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le mot de passe</label>
              <Field
                type='password'
                className='form-control '
                name='password'
                placeholder='Entrer le mot de passe'
              />

              <span className='errors-field'>
                {errors.password ? <>{errors.password}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Répéter le mot de passe</label>
              <Field
                type='password'
                className='form-control '
                name='password_confirm'
                placeholder='Répéter le mot de passe'
              />

              <span className='errors-field'>
                {errors.password_confirm ? (
                  <>{errors.password_confirm}</>
                ) : null}
              </span>
            </div>
          </div>

          <SubmitButtom message={"Soumettre"} loading={loading} />
        </Form>
      )}
    </Formik>
  );
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type='button'
        className='btn btn-primary'
        data-bs-target='#custom-modal'
      >
        <i className='fa fa-plus'></i> Ajouter utilisateur
      </button>
      <Modal
        title={
          <>
            <h4>Ajouter un utilisateur</h4>
          </>
        }
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => {
          setErrorsState(null);
          setOpen(false);
        }}
        width={750}
        footer={[]}
      >
        {form}
      </Modal>
    </>
  );
};

import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { Divider } from "antd";
import { editUser_ } from "../../actions/UserAction";
import { Alert } from "@mui/material";
import { editUsers } from "../../redux/UserSlice";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { Toast } from "../layout/Toast";

export const EditUsers = ({ user }: any) => {
  // set open
  const [open, setOpen] = useState(false);
  // set loading
  const [loading, setLoading] = useState(false);
  // set errors
  const [errorsState, setErrorsState] = useState(null);
  // use app dispatch
  const dispatch = useAppDispatch();
  // initiale values
  var initialValues;

  // shema validation
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("L'email est invalide")
      .required("Ce champ est obligatoire !"),
    username: Yup.string().required("Ce champ est obligatoire !"),
    role_name: Yup.string().required("Ce champ est obligatoire !"),
  });

  // Form html
  const form = (
    <Formik
      initialValues={{
        email: user.person.email,
        username: user.username,
        role_name: user.role.role_name,
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert users
        const data = await editUser_(
          {
            email: values.email,
            username: values.username,
            role_name: values.role_name,
          },
          user.person.uuid
        );

        //if errors

        if (data.status) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          // update states
          dispatch(editUsers(data));
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
              <label>Email</label>
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

          <SubmitButtom message={"Soumettre"} loading={loading} />
        </Form>
      )}
    </Formik>
  );
  return (
    <>
      <button className='btn btn-xs btn-info m-1' onClick={() => setOpen(true)}>
        <i className='fa fa-edit' />
      </button>
      {/* <button
        onClick={() => setOpen(true)}
        type='button'
        className='btn btn-primary'
        data-bs-target='#custom-modal'
      >
        <i className='fa fa-plus'></i> Ajouter utilisateur
      </button> */}
      <Modal
        title={
          <>
            <h4>Modifer cet utilisateur</h4>
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

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { AppTitle } from "../partials/AppTitle";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { addEmployee } from "../../actions/EmployeesAction";
import { ToastContainer, toast } from "react-toastify";

const AddEmpoyee: React.FC<{}> = () => {
  // is loding for submitinfo
  const [loading, setLoading] = useState(false);
  const [errorsState, setErrorsState] = useState(null);
  // shema validation
  const SignupSchema = Yup.object().shape({
    nom: Yup.string().required("Ce champ est obligatoire !"),
    prenom: Yup.string().required("Ce champ est obligatoire !"),
    sexe: Yup.string().required("Ce champ est obligatoire !"),
    email: Yup.string()
      .email("L'email est invalide")
      .required("Ce champ est obligatoire !"),
    telephone: Yup.string().required("Ce champ est obligatoire !"),
    date_naissance: Yup.date().required("Cette date n'est pas valide!"),
    fonction: Yup.string().required("Ce champ est obligatoire !"),
    date_embauche: Yup.date().required("Cette date n'est pas valide !"),
    salaire: Yup.number().min(0, "La note ne doit pas être inferieur à 0"),
  });

  // useeffects
  useEffect(() => {}, []);

  const form = (
    <Formik
      initialValues={{
        nom: "",
        prenom: "",
        sexe: "",
        email: "",
        telephone: "",
        date_naissance: "",
        fonction: "",
        date_embauche: "",
        salaire: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert employee
        const data = await addEmployee(values);
        // if errors
        if (data.status === 404) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          // if success message to user
          toast.success("Employé ajouté avec succès");
          // set loading is false
          setLoading(false);
          // reset data form to empty
          resetForm();
          // reset the message errors to null
          setErrorsState(null);
        }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <ToastContainer
            position='bottom-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
          />
          {errorsState && (
            <div className='row mb-3 alert alert-danger bold '>
              <b>{errorsState}</b>
            </div>
          )}

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le nom</label>
              <Field className='form-control ' name='nom' placeholder='Jacky' />

              <span className='errors-field'>
                {errors.nom ? <>{errors.nom}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le prenom</label>
              <Field
                className='form-control '
                name='prenom'
                placeholder='Anizaire'
              />

              <span className='errors-field'>
                {errors.prenom ? <>{errors.prenom}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le sexe</label>
              <Field className='form-control' as='select' name='sexe'>
                <option value=''>Choisir une option</option>
                <option value={"masculin"}>Masculin</option>
                <option value={"feminin"}>Feminin</option>
              </Field>

              <span className='errors-field'>
                {errors.sexe ? <>{errors.sexe}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer l'email</label>
              <Field
                className='form-control '
                name='email'
                placeholder='anizairejacky@gmail.com'
              />

              <span className='errors-field'>
                {errors.email ? <>{errors.email}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le telephone</label>
              <Field
                className='form-control '
                name='telephone'
                placeholder='+509 3454 34 32'
              />

              <span className='errors-field'>
                {errors.telephone ? <>{errors.telephone}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer la date de naissance</label>
              <Field
                className='form-control '
                name='date_naissance'
                placeholder=''
                type='date'
              />

              <span className='errors-field'>
                {errors.date_naissance ? <>{errors.date_naissance}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer la fonction</label>
              <Field
                className='form-control '
                name='fonction'
                placeholder='Secretaire'
              />

              <span className='errors-field'>
                {errors.fonction ? <>{errors.fonction}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer la date d'embauche</label>
              <Field
                className='form-control '
                name='date_embauche'
                type='date'
                placeholder=''
              />

              <span className='errors-field'>
                {errors.date_embauche ? <>{errors.date_embauche}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-12 position-relative mb-2'>
              <label>Entrer le salaire</label>
              <Field
                className='form-control '
                name='salaire'
                placeholder='200'
              />

              <span className='errors-field'>
                {errors.salaire ? <>{errors.salaire}</> : null}
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
      <AppTitle title={"Ajouter un employee"} />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              {/* <h4 className='mb-3 header-title'>Basic Example</h4> */}
              {form}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>
      </div>
    </>
  );
};

export default AddEmpoyee;

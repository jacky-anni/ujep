import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import AppTitle from "../partials/AppTitle";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { ToastContainer, toast } from "react-toastify";
import { addStudents } from "../../redux/actions/StudentAction";
import { useNavigate } from "react-router-dom";

const AddStudents: React.FC<{}> = () => {
  // is loding for submitinfo
  const [loading, setLoading] = useState(false);
  const [errorsState, setErrorsState] = useState(null);
  const navigate = useNavigate();
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
    lieu_naissance: Yup.string().required("Ce champ est obligatoire !"),
    groupe_sanguin: Yup.string().required("Ce champ est obligatoire !"),
    statut_matrimonial: Yup.string().required("Ce champ est obligatoire !"),
    cin: Yup.string().required("Ce champ est obligatoire !"),
    nif: Yup.string().required("Ce champ est obligatoire !"),
  });

  const form = (
    <Formik
      initialValues={{
        nom: "",
        prenom: "",
        sexe: "",
        email: "",
        telephone: "",
        date_naissance: "",
        lieu_naissance: "",
        groupe_sanguin: "",
        statut_matrimonial: "",
        cin: "32323232",
        nif: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert employee
        const data = await addStudents(values);
        // if errors
        if (data.status === 404) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          // if success message to user
          toast.success("Etudiants ajouté avec succès");
          // set loading is false
          setLoading(false);
          // reset data form to empty
          resetForm();
          // reset the message errors to null
          setErrorsState(null);
          // redirect for 2 etatp
          return navigate("/dashbord/add-students-infos/" + data.person.uuid);
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
              <Field
                className='form-control '
                name='nom'
                placeholder='Anizaire'
              />

              <span className='errors-field'>
                {errors.nom ? <>{errors.nom}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le prenom</label>
              <Field
                className='form-control '
                name='prenom'
                placeholder='Jacky'
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
              <label>Lieu de naissance</label>
              <Field
                className='form-control '
                name='lieu_naissance'
                placeholder='Port-Margot'
              />

              <span className='errors-field'>
                {errors.lieu_naissance ? <>{errors.lieu_naissance}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Groupe sanguin</label>
              <Field className='form-control' as='select' name='groupe_sanguin'>
                <option value=''>Choisir une option</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"A-"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>A+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
              </Field>

              <span className='errors-field'>
                {errors.groupe_sanguin ? <>{errors.groupe_sanguin}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Etat Matrimonial</label>
              <Field
                className='form-control'
                as='select'
                name='statut_matrimonial'
              >
                <option value=''>Choisir une option</option>
                <option value={"Célibataire"}>Célibataire</option>
                <option value={"Marié (e)"}>Marié (e)</option>
                <option value={"Divocé (e)"}>Divocé (e)</option>
                <option value={"Union Libre"}>Union Libre</option>
              </Field>

              <span className='errors-field'>
                {errors.statut_matrimonial ? (
                  <>{errors.statut_matrimonial}</>
                ) : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Entrer le NIF</label>
              <Field
                className='form-control '
                name='nif'
                placeholder='+9494-939-0'
              />

              <span className='errors-field'>
                {errors.nif ? <>{errors.nif}</> : null}
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
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              {/* <h4 className='mb-3 header-title'>Basic Example</h4> */}
              <AppTitle title={"Ajouter un etudiant"} />
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

export default AddStudents;

import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import AppTitle from "../partials/AppTitle";
import SubmitButtom from "../Ui/form/SubmitButtom";
import { ToastContainer, toast } from "react-toastify";
import {
  showStudents,
  addStudentsSupp,
} from "../../redux/actions/StudentAction";
import { useNavigate, useParams } from "react-router-dom";
import BannerStudents from "./BannerStudents";
import { studentFetch } from "../../redux/StudentsSlice";
import { useAppDispatch, useAppSelector } from "./../../redux/hooks/hooks";
import { Bars, ThreeDots } from "react-loader-spinner";

const AddStudentsInfoSupp: React.FC<{}> = () => {
  // is loding for submitinfo
  const [loading, setLoading] = useState(false);
  const [errorsState, setErrorsState] = useState(null);
  // navigate
  const navigate = useNavigate();
  // show paprams
  const { student } = useParams();
  // dispatch
  const dispatch = useAppDispatch();
  // fetch studendts
  const currentStudent = useAppSelector((state) => state.student);

  // shema validation
  const AddStudentsInfoSupp = Yup.object().shape({
    ocupation: Yup.string().required("Ce champ est obligatoire !"),
    personne_resp: Yup.string().required("Ce champ est obligatoire !"),
    telephone_resp: Yup.string().required("Ce champ est obligatoire !"),
    maladie_check: Yup.string().required("Ce champ est obligatoire !"),
    personne_contact: Yup.string().required("Ce champ est obligatoire !"),
    annee_fin_etude: Yup.string().required("Ce champ est obligatoire !"),
    etablissement_check: Yup.string().required("Ce champ est obligatoire !"),
  });

  // useeffects
  useEffect(() => {
    (async () => {
      // fetch data
      const data = await showStudents(student);
      if (data.status === 404) {
        console.log(data);
      } else {
        dispatch(studentFetch(data));
      }
    })();
  }, [student]);

  const form = (
    <Formik
      initialValues={{
        ocupation: "",
        personne_resp: "",
        telephone_resp: "",
        maladie: "",
        personne_contact: "",
        annee_fin_etude: "",
        nom_etablissemet: "",
        etude_precedente: "",
        option_precendente: "",
        annee_etude_precedente: "",
        maladie_check: "",
        etablissement_check: "",
      }}
      validationSchema={AddStudentsInfoSupp}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert employee
        const data = await addStudentsSupp(
          {
            ocupation: values.ocupation,
            personne_resp: values.personne_resp,
            telephone_resp: values.telephone_resp,
            maladie: values.maladie,
            personne_contact: values.personne_contact,
            annee_fin_etude: values.annee_fin_etude,
            nom_etablissemet: values.nom_etablissemet,
            etude_precedente: values.etude_precedente,
            option_precendente: values.option_precendente,
            annee_etude_precedente: values.annee_etude_precedente,
          },
          currentStudent.student.id
        );
        // if errors
        if (data.status === 404) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          // if success message to user
          toast.success("informations ajoutées avec succès");
          // set loading is false
          setLoading(false);
          // reset data form to empty
          resetForm();
          // reset the message errors to null
          setErrorsState(null);
          // redirect
          return navigate("/dashbord/add-students");
        }
      }}
    >
      {({ errors, touched, values }) => (
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
              <label>Occupation</label>
              <Field
                className='form-control '
                name='ocupation'
                placeholder='Medecein'
              />

              <span className='errors-field'>
                {errors.ocupation ? <>{errors.ocupation}</> : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Personne responsable</label>
              <Field
                className='form-control '
                name='personne_resp'
                placeholder='Jacky'
              />

              <span className='errors-field'>
                {errors.personne_resp ? <>{errors.personne_resp}</> : null}
              </span>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 position-relative mb-2'>
              <label>Personne de contact</label>
              <Field
                className='form-control '
                name='personne_contact'
                placeholder='Jacky Anizaire'
              />

              <span className='errors-field'>
                {errors.personne_contact ? (
                  <>{errors.personne_contact}</>
                ) : null}
              </span>
            </div>

            <div className='col-md-6 position-relative mb-2'>
              <label>Telephone du personne responsable</label>
              <Field
                className='form-control '
                name='telephone_resp'
                placeholder='4872-9922'
              />

              <span className='errors-field'>
                {errors.telephone_resp ? <>{errors.telephone_resp}</> : null}
              </span>
            </div>

            <div className='row'>
              <div className='col-md-6 position-relative mb-2'>
                <label>Annee fin d'etude</label>
                <Field
                  className='form-control '
                  name='annee_fin_etude'
                  placeholder='2010-2011'
                />
                <span className='errors-field'>
                  {errors.annee_fin_etude ? (
                    <>{errors.annee_fin_etude}</>
                  ) : null}
                </span>
              </div>
              <div className='col-md-6 position-relative mb-2'>
                <label className='mb-1'>Souffrez-vous une maladie ? </label>{" "}
                <div className='form-check'>
                  <label>
                    &nbsp;
                    <Field
                      type='radio'
                      name='maladie_check'
                      value='Oui'
                      className='form-check-input'
                    />
                    Oui &nbsp;
                  </label>
                </div>
                <div className='form-check'>
                  <label>
                    &nbsp;
                    <Field
                      type='radio'
                      name='maladie_check'
                      value='Non'
                      className='form-check-input'
                    />
                    Non &nbsp;
                  </label>
                </div>
                <span className='errors-field'>
                  {errors.maladie ? <>{errors.maladie}</> : null}
                </span>
              </div>
              {values.maladie_check === "Oui" && (
                <div className='row'>
                  <div className='col-md-12 position-relative mb-2'>
                    <label>Mentionnez la maladie</label>
                    <Field
                      className='form-control '
                      name='maladie'
                      placeholder='Ecrivez ici...'
                    />
                  </div>
                </div>
              )}
            </div>

            <div className='row'>
              <div className='col-md-12 position-relative mb-2'>
                <label className='mb-1'>
                  avez vous fait une etude universitaire precedemement ?{" "}
                </label>{" "}
                <div className='form-check'>
                  <label>
                    &nbsp;
                    <Field
                      type='radio'
                      name='etablissement_check'
                      value='Oui'
                      className='form-check-input'
                    />
                    Oui &nbsp;
                  </label>
                </div>
                <div className='form-check'>
                  <label>
                    &nbsp;
                    <Field
                      type='radio'
                      name='etablissement_check'
                      value='Non'
                      className='form-check-input'
                    />
                    Non &nbsp;
                  </label>
                </div>
                <span className='errors-field'>
                  {errors.maladie ? <>{errors.maladie}</> : null}
                </span>
              </div>
            </div>

            {values.etablissement_check === "Oui" && (
              <>
                <div className='row'>
                  <div className='col-md-6 position-relative mb-2'>
                    <label>Nom de l'etablissement</label>
                    <Field
                      className='form-control '
                      name='nom_etablissemet'
                      placeholder='2010-2011'
                    />
                  </div>

                  <div className='col-md-6 position-relative mb-2'>
                    <label>Etude Precedente</label>
                    <Field
                      className='form-control '
                      name='etude_precedente'
                      placeholder='Mentionnez ici..'
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-6 position-relative mb-2'>
                    <label>Option precedente</label>
                    <Field
                      className='form-control '
                      name='option_precendente'
                      placeholder='2010-2011'
                    />
                  </div>

                  <div className='col-md-6 position-relative mb-2'>
                    <label>Annee precedente</label>
                    <Field
                      className='form-control '
                      name='annee_etude_precedente'
                      placeholder='Mentionnez ici..'
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          <SubmitButtom message={"Soumettre"} loading={loading} />
        </Form>
      )}
    </Formik>
  );

  return (
    <>
      <div className='row'>
        <div className='card'>
          <AppTitle title={"Ajouter un etudiant"} />
        </div>

        <div className='col-md-4'>
          {!currentStudent.isLoading ? (
            <BannerStudents student={currentStudent.student} />
          ) : (
            <div className='card card-body'>
              <center>
                <Bars
                  height='50'
                  width='50'
                  color='#7d56c2'
                  ariaLabel='bars-loading'
                  wrapperStyle={{ display: "block" }}
                  wrapperClass=''
                  visible={true}
                />
                <p style={{ marginTop: "0px" }}>Chargment en cours...</p>
              </center>
            </div>
          )}
        </div>

        <div className='col-md-8'>
          <div className='card'>
            <div className='card-body'>
              {!currentStudent.isLoading ? (
                form
              ) : (
                <center>
                  <ThreeDots
                    height='70'
                    width='70'
                    color='#7d56c2'
                    ariaLabel='bars-loading'
                    wrapperStyle={{ display: "block" }}
                    wrapperClass=''
                    visible={true}
                  />
                  <p style={{ marginTop: "0px" }}>Chargment en cours...</p>
                </center>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddStudentsInfoSupp;

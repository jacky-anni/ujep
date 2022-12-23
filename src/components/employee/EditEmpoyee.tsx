import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import AppTitle from "../partials/AppTitle";
import SubmitButtom from "../Ui/form/SubmitButtom";
import {
  editEmployee,
  showEmployee,
} from "../../redux/actions/EmployeesAction";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { ToastContainer, toast } from "react-toastify";
import { EmployeeFetch, clearLoading } from "../../redux/EmployeeSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import ErrorsTemplate from "../Ui/ErrorsTemplate";

const EditEmpoyee: React.FC<{}> = () => {
  // is loding for submitinfo
  const [loading, setLoading] = useState(false);
  // set errors state
  const [errorsState, setErrorsState] = useState(null);
  // setup use params
  const { id } = useParams();
  // initialState
  const dispatch = useAppDispatch();
  //  elelct imployee states
  const { employee, isLoading } = useAppSelector((state) => state.employee);
  // set up navigate
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
    fonction: Yup.string().required("Ce champ est obligatoire !"),
    date_embauche: Yup.date().required("Cette date n'est pas valide !"),
    salaire: Yup.number().required("salaire doit être de type nombre"),
  });

  // useeffects
  var initialValues;
  useEffect(() => {
    (async () => {
      // fetch data
      const data = await showEmployee(id);

      if (data.status === 404) {
        // dispatch(EmployeesFetchErrors(data.message));
      } else {
        dispatch(clearLoading());
        dispatch(EmployeeFetch(data));
      }
    })();
  }, [id, dispatch]);

  if (employee) {
    initialValues = {
      nom: employee.person.nom,
      prenom: employee.person.prenom,
      sexe: employee.person.sexe,
      email: employee.person.email,
      telephone: employee.person.telephone,
      date_naissance: employee.person.date_naissance,
      fonction: employee.fonction,
      date_embauche: employee.date_embauche,
      salaire: employee.salaire,
    };
  } else {
    initialValues = {
      nom: "",
      prenom: "",
      sexe: "",
      email: "",
      telephone: "",
      date_naissance: "",
      fonction: "",
      date_embauche: "",
      salaire: "",
    };
  }

  const form = (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={async (values, { resetForm }) => {
        //same shape as initial values
        setLoading(true);
        // insert employee
        const data = await editEmployee(employee.person.uuid, values);
        // if errors
        if (data.status === 404) {
          // return the error message
          setErrorsState(data.message);
          // set loading to false, desactivate
          setLoading(false);
        } else {
          // if success message to user
          toast.success("Employé modifié avec succès");
          // reset the message errors to null
          setErrorsState(null);
          // rediect employee
          const myTimeout = setTimeout(function () {
            // set loading is false
            setLoading(false);
            return navigate("/employees");
          }, 1300);
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
      <AppTitle title={"Editer cet employé"} />
      <div className='row'>
        <div className='col-lg-12'>
          <div className='card'>
            <div className='card-body'>
              {errorsState && (
                <ErrorsTemplate message={errorsState} type={"danger"} />
              )}

              {!isLoading ? (
                form
              ) : (
                <center>
                  <Bars
                    height='80'
                    width='80'
                    color='#7d56c2'
                    ariaLabel='bars-loading'
                    wrapperStyle={{ display: "block" }}
                    wrapperClass=''
                    visible={true}
                  />
                  <p style={{ marginTop: "0px" }}>Chargment en cours...</p>
                </center>
              )}
              {/* <h4 className='mb-3 header-title'>Basic Example</h4> */}
            </div>{" "}
            {/* end card-body*/}
          </div>{" "}
          {/* end card*/}
        </div>
      </div>
    </>
  );
};

export default EditEmpoyee;
